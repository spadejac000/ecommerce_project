const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const items = require('./routes/api/items');
const users = require('./routes/api/users');
const cart = require('./routes/api/cart');
const keys = require('./config/keys');
const cool = require('cool-ascii-faces');

// body parser middleware
app.use(bodyParser.json());

//use routes
app.use('/api/items', items)
app.use('/api/users', users)
app.use('/api/cart', cart)
app.get('/cool', (req, res) => res.send(cool()))


const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

// serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

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