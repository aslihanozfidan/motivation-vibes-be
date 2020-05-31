const QuoteModel = require('../models/quoteModel')

const addQuote = () => {
  let NewQuote = new QuoteModel({ quote: 'Test' })
  return NewQuote.save()
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err, 'in addQuote')
    })
}

const getAllQuotes = async () => {
  return QuoteModel.find({})
    .exec()
    .then((docs) => {
      console.log(docs, 'in getAllQuotes')
      return docs
    })
    .catch((err) => {
      console.log(err, 'in getAllQuotes')
    })
}

const getQuote = (id) => {
  return QuoteModel.find({ _id: id })
    .exec()
    .then((docs) => {
      console.log(docs, 'in getQuote')
      return docs
    })
    .catch((err) => {
      console.log(err, 'in getQuote')
    })
}

module.exports = {
  getAllQuotes,
  getQuote,
  addQuote
}
