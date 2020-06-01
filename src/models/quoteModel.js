const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quoteSchema = new Schema({
  id: String,
  quote: String,
  language: Number,
  owner: String
})

module.exports = mongoose.model('quote', quoteSchema)
