module.exports = {
  mongoURI: 'mongodb+srv://jacob123:jacob123@ecommerce.rbztb.mongodb.net/<dbname>?retryWrites=true&w=majority',
  secretOrKey: "SECRET",
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
}