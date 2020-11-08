const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')
router.use(cors());

//item model
const Item = require('../../models/Item');

//route GET api/items
// desc GET all items
// Public
router.get('/', (req, res) => {
  Item.find()
  .sort({date: -1})
  .then(items => res.json(items))
})

// route POST
router.post('/', (req, res) => {
  console.log('I received a request!!!')
  console.log(req.body)
  const newItem = new Item({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image
  });

  newItem.save().then(item => res.json(item));
})

// POST route for handling stripe checkout
// router.post('/', async (req, res) => {

//   let error;
//   let status;
//   try {
//     const {token} = req.body;

//     const customer = await
//     stripe.customers.create({
//       email: token.email,
//       source: token.id
//     });

//     const idempotency_key = uuidv4();
//     const charge = await stripe.charges.create(
//       {
//         amount: 2500,
//         currency: "usd",
//         customer: customer.id,
//         receipt_email: token.email,
//         description: `Purchased the dishwasher`,
//         shipping: {
//           name: token.card.name,
//           address: {
//             line1: token.card.address_line1,
//             line2: token.card.address_line2,
//             city: token.card.address_city,
//             country: token.card.address_country,
//             postal_code: token.card.address_zip
//           }
//         }
//       },
//       {
//         idempotency_key
//       }
//     );
//     console.log("charge: ", {charge});
//     status = "success";
//   } catch (error) {
//     console.error("error: ", error);
//     status = "failure";
//   }
//   res.json({
//     redirect: '/success'
//     ,error, 
//     status})
// })

//route DELETE api/items/:id
// Delete an item
// Public
router.delete('/:id', (req, res) => {
  console.log('i recieved a delete request!!!')
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

//route DELETE api/items
// Delete all items
// Public
router.delete('/', (req, res) => {
  console.log('i recieved a delete ALL request!!!')
  Item.deleteMany({}, (err) => console.log(err))
})


module.exports = router;