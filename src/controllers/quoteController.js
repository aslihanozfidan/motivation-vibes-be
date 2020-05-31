const quoteManager = require('../managers/quoteManager')

exports.getAll = async (req, res) => {
  data = await quoteManager.getAllQuotes()

  res.send(data)
}

exports.get = function(req, res) {
  quoteManager.getQuote(req.params.id).then((data) => res.send(data)).catch((err) => res.send(err))
}
