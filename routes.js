const QuoteController = require('./src/controllers/quoteController')
const LanguageController = require('./src/controllers/languageController')

class Routes {
  mountRoutes(router) {
    router.get('/', (req, res) => res.send('Hello World!'))
    router.get('/quotes', QuoteController.getAll)
    router.get('/quotes/:id', QuoteController.get)
    router.get('/languages', LanguageController.getAll)
    router.get('/languages/:id', LanguageController.get)
  }
}

module.exports = Routes
