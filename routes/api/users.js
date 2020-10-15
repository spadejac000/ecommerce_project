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
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)
const flash = require('express-flash')
const session = require('express-session')

// User model
const User = require('../../models/User');

const users = []

router.use(flash())
router.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())

// router.get('/', (req, res) => {
//   User.find()
//   .sort({date: -1})
//   .then(users => res.json(users))
// })

// get the user info after login
router.get('/', (req, res) => {
  res.send({name: req.user.name})
})

// post route for a user logging in their account
router.post('/login', passport.authenticate('local', {

}), (req, res) => {
  try {
    res.json({redirect: '/'})
  } catch (error) {
    if(error) {
      res.json({redirect: '/login'})
    }
  }
}
);

// post route when a user registers for an account
router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.json({redirect: '/login'})
  } catch {
    res.json({redirect: '/register'})
  }
  console.log(users)
})

// when a user wants to log out
router.delete('/logout', (req, res) => {
  console.log('i recieved a log out request!!!!')
  req.logOut();
  res.json({redirect: '/login'})
})

// function checkAuthenticated(req, res, next) {
//   if(req.isAuthenticated()) {
//     return next()
//   }
//   res.json({redirect: '/login'})
// }

module.exports = router;