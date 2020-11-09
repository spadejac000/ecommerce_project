const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const items = require('./routes/api/items');
const users = require('./routes/api/users');
const cart = require('./routes/api/cart');
const keys = require('./config/keys');
const cors = require('cors')

app.use(cors());

// body parser middleware
app.use(bodyParser.json());

//use routes
app.use('/api/items', items)
// app.use('/api/users', users)
app.use('/api/cart', cart)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`))

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// //production mode
if(process.env.NODE_ENV === 'production') {  
  app.use(express.static(path.join(__dirname, 'client/build'))); 

  app.get('*', (req, res) => {    
    res.sendfile(path.join(__dirname = 'client/build/index.html'));  
  })
}

//build mode
// app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));
// })

//db config
const db = require('./config/keys').mongoURI

// connect to mongo
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('mongodb connected')
  })
  .catch(err => console.log(err))

  // Changed to this line for Heroku
// mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});


// user routes
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('./passport-config');
initializePassport(
  passport, 
  email => User.find(user => user.email === email),
  id => User.find(user => user._id === id)
)
const flash = require('express-flash')
const session = require('express-session')

// User model
const User = require('./models/User');

app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/users', (req, res) => {
  User.find()
  .sort({date: -1})
  .then(users => res.json(users))
})

// // get the user info after login
app.get('/', checkAuthenticated, (req, res) => {
  console.log('hello request: ', req.user)
  res.send({name: req.user.name, id: req.user._id})
})

app.get('/login', checkNotAuthenticted, (req, res) => {
  res.json({message: 'this is the login page'})
})

// post route for a user logging in their account
app.post('/login', checkNotAuthenticted, passport.authenticate('local', {}), (req, res) => {
  try {
    res.json({redirect: '/'})
  } catch (error) {
    if(error) {
      res.json({redirect: '/login'})
    }
  }
}
);

app.get('/register', checkNotAuthenticted, (req, res) => {
  res.json({message: 'this is the register page'})
})

// post route when a user registers for an account
app.post('/register', checkNotAuthenticted, async (req, res) => {
  try {
    User.findOne({email: req.body.email}, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User already exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
          // id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
        });
        await newUser.save();
        res.json({redirect: '/login'})
      }
    })
  } 
  catch {
    res.json({redirect: '/register'})
  }
})

// when a user wants to log out
app.delete('/logout', (req, res) => {
  req.logOut();
  res.json({redirect: '/login'})
})

//route DELETE api/users
// Delete all users
app.delete('/', (req, res) => {
  console.log('i recieved a delete ALL request for all users!!!')
  User.deleteMany({}, (err) => console.log(err))
})

function checkAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next()
  } else {
    res.json({loggedIn: false})
  }
}

function checkNotAuthenticted(req, res, next) {
  if(req.isAuthenticated()) {
    return res.json({loggedIn: true})
  }
  next()
}