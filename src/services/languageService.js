const LanguageModel = require('../models/languageModel')

const getAllLanguages = async () => {
  return LanguageModel.find({})
    .exec()
    .then((languages) => {
      console.log(languages, 'in getAllLanguages')
      return languages
    })
    .catch((err) => {
      console.log(err, 'in getAllLanguages')
    })
}

const getLanguage = (id) => {
  return LanguageModel.find({ id: id })
    .exec()
    .then((docs) => {
      console.log(docs, 'in getLanguage')
      return docs
    })
    .catch((err) => {
      console.log(err, 'in getLanguage')
    })
}

module.exports = {
  getAllLanguages,
  getLanguage
}
