const QuoteService = require('../services/quoteService')

const getAllQuotes = async () => {
  return await QuoteService.getAllQuotes()
}

const getQuote = async (id) => {
  return QuoteService.getQuote(id)
}

module.exports = {
  getAllQuotes,
  getQuote
}
