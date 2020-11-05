const express = require('express');
const router = express.Router();

//cart model
const Cart = require('../../models/Cart');
// user model
const User = require('../../models/User');

let userId = '';

router.get("/", (req, res) => {
  // Cart.find()
  // .sort({date: -1})
  // .then(items => res.json(items))
  Cart.find()
  .sort({date: -1})
  .then(carts => res.send({carts, userId: userId}))
  console.log("here is the freaking beacon user id: ", userId)
})

router.post('/userid', (req, res) => {
  console.log('hello darkness you win: ', req.body)
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

// route delete api/cart/everycart
// delete all carts in application
router.delete('/everycart/hello', (req, res) => {
  Cart.deleteMany({}, (err) => console.log('all carts have been deleted'))
  console.log('every cart has been deleted')
})

module.exports = router;