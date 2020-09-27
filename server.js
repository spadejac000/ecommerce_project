const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const items = require('./routes/api/items');
const keys = require('./config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

// body parser middleware
app.use(bodyParser.json());

//use routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`))

//db config
const db = require('./config/keys').mongoURI

// connect to mongo
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('mongodb connected')
  })
  .catch(err => console.log(err))