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

router.use(flash())
router.use(session({
  secret: "SECRET",
  resave: false,
  saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())

router.get('/', (req, res) => {
  res.send({test: 'this is a test'})
})

function checkAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next()
  } else {
    res.json({loggedIn: false})
  }
}

module.exports = router;