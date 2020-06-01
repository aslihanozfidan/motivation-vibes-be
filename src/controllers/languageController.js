const LanguageManager = require('../managers/languageManager')

exports.getAll = async (req, res) => {
  data = await LanguageManager.getAllLanguages()

  res.send(data)
}

exports.get = function(req, res) {
  LanguageManager.getLanguage(req.params.id).then((data) => res.send(data)).catch((err) => res.send(err))
}
