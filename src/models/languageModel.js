const mongoose = require('mongoose')
const Schema = mongoose.Schema

const languageSchema = new Schema({
  id: Number,
  name: String
})

module.exports = mongoose.model('language', languageSchema)
