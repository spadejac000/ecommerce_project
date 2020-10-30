const User = require('./models/User');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await User.findOne({email})
    // const user = getUserByEmail(email)
    if(user == null) {
      return done(null, false, {message: 'No user with that email'})
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, {messsage: 'Password incorrect'})
      }
    } catch (error) {
      return done(error)
    }
  }
  passport.use(new localStrategy({usernameField: 'email'}, authenticateUser))
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  })
}

module.exports = initialize