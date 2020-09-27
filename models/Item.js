const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Item = mongoose.model('item', ItemSchema)