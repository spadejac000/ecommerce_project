const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const { v4: uuidv4 } = require('uuid');

//cart model
const Cart = require('../../models/Cart');
// user model
const User = require('../../models/User');

let userId = '';

router.get("/", (req, res) => {
  Cart.find()
  .sort({date: -1})
  .then(carts => res.send({carts, userId: userId}))
})

router.post('/userid', (req, res) => {
  userId = req.body.id
  res.send({userId})
})

router.post("/", async (req, res) => {
  const { productId, quantity, name, price, image } = req.body;
  console.log('the user: ', req.body.theUserId);

  // userId = req.body.theUserId; //TODO: the logged in user id

  try {
    let cart = await Cart.findOne({ userId: req.body.theUserId });

    if (cart) {
      //cart exists for user
      // let itemIndex = cart.products.findIndex(p => p.productId == productId);
      // if (itemIndex > -1) {
      //   //product exists in the cart, update the quantity
      //   let productItem = cart.products[itemIndex];
      //   productItem.quantity = quantity;
      //   cart.products[itemIndex] = productItem;
      // } else {
        //product does not exists in cart, add new item
        cart.products.push({ productId, quantity, name, price, image });
      // }
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      //no cart for user, create new cart
      const newCart = await Cart.create({
        userId,
        products: [{ productId, quantity, name, price, image }]
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

// POST route for handling stripe checkout
router.post('/checkout', async (req, res) => {

  let error;
  let status;
  try {
    const {token} = req.body;

    const customer = await
    stripe.customers.create({
      email: req.body.token.email,
      source: req.body.token.id
    });

    const idempotency_key = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: 2500,
        currency: "usd",
        customer: customer.id,
        receipt_email: req.body.token.email,
        description: `Purchased the dishwasher`,
        shipping: {
          name: req.body.token.card.name,
          address: {
            line1: req.body.token.card.address_line1,
            line2: req.body.token.card.address_line2,
            city: req.body.token.card.address_city,
            country: req.body.token.card.address_country,
            postal_code: req.body.token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("charge: ", {charge});
    status = "success";
  } 
  catch (error) {
    console.error("error: ", error);
    status = "failure";
  }
  res.json({
    redirect: '/success',
    error, 
    status})
})

//route DELETE api/cart/:id
// Delete an item from cart
// Public
router.delete('/:id', async (req, res) => {
  let cart = await Cart.findOne({ userId })
  console.log('the cart: ', cart)

  //delete cart item
  cart.update({ $pull: { products : {_id: req.params.id }}}, function (err, data) {
    if (err) res.send(err)
    else res.send(data)
  })
})

//route DELETE api/cart
// Delete all items in unique cart
router.delete('/cartcontent/hello/:id', async (req, res) => {
  let cart = await Cart.findOne({ userId })
  cart.update({$pull: {products: {}}},
    function(err, data) {
      if (err) res.send(err)
      else res.send(data)
    })
})

// route delete api/cart/everycart
// delete all carts in application
router.delete('/everycart/hello', (req, res) => {
  Cart.deleteMany({}, (err) => console.log('all carts have been deleted'))
  console.log('every cart has been deleted')
})

module.exports = router;