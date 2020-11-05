const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const CartSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    products: [
      {
        productId: String,
        quantity: Number,
        name: String,
        price: Number,
        image: String
      }
    ]
  }
)

module.exports = Cart = mongoose.model('cart', CartSchema)