const LanguageService = require('../services/languageService')

const getAllLanguages = async () => {
  return await LanguageService.getAllLanguages()
}

const getLanguage = async (id) => {
  return LanguageService.getLanguage(id)
}

module.exports = {
  getAllLanguages,
  getLanguage
}
