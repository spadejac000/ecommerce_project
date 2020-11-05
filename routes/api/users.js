if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('../../passport-config');
initializePassport(
  passport, 
  email => User.find(user => user.email === email),
  id => User.find(user => user._id === id)
)
const flash = require('express-flash')
const session = require('express-session')

// User model
const User = require('../../models/User');

router.use(flash())
router.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())

router.get('/users', (req, res) => {
  User.find()
  .sort({date: -1})
  .then(users => res.json(users))
})

// get the user info after login
router.get('/', checkAuthenticated, (req, res) => {
  res.send({name: req.user.name, id: req.user._id})
})

router.get('/login', checkNotAuthenticted, (req, res) => {
  res.json({message: 'this is the login page'})
})

// post route for a user logging in their account
router.post('/login', checkNotAuthenticted, passport.authenticate('local', {}), (req, res) => {
  console.log('I just logged in and here is my Id: ', req)
  try {
    res.json({redirect: '/'})
  } catch (error) {
    if(error) {
      res.json({redirect: '/login'})
    }
  }
}
);

router.get('/register', checkNotAuthenticted, (req, res) => {
  res.json({message: 'this is the register page'})
})

// post route when a user registers for an account
router.post('/register', checkNotAuthenticted, async (req, res) => {
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
router.delete('/logout', (req, res) => {
  req.logOut();
  res.json({redirect: '/login'})
})

//route DELETE api/users
// Delete all users
router.delete('/', (req, res) => {
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

module.exports = router;