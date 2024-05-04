require('dotenv').config()

module.exports = {
   MONGO_URI: process.env.MONGO_URI,
   PORT: process.env.PORT || 400,
   NODE_ENV: process.env.NODE_ENV,
}