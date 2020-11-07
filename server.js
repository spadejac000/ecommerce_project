const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const items = require('./routes/api/items');
const users = require('./routes/api/users');
const cart = require('./routes/api/cart');
const keys = require('./config/keys');

// body parser middleware
app.use(bodyParser.json());

//use routes
app.use('/api/items', items)
app.use('/api/users', users)
app.use('/api/cart', cart)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`))

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if(process.env.NODE_ENV === 'production') {  
  app.use(express.static(path.join(__dirname, 'client/build'))); 
  //   app.get('*', (req, res) => {    
  //     res.sendfile(path.join(__dirname = 'client/build/index.html'));  
  //   }
  // )
}

//build mode
app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})

//db config
const db = require('./config/keys').mongoURI

// connect to mongo
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('mongodb connected')
  })
  .catch(err => console.log(err))