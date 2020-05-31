const QuoteController = require('./src/controllers/quoteController')

class Routes {
  mountRoutes(router) {
    router.get('/', (req, res) => res.send('Hello World!'))
    router.get('/quotes', QuoteController.getAll)
    router.get('/quotes/:id', QuoteController.get)
  }
}

module.exports = Routes
