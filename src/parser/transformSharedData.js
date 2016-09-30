const objectLastIndex = sharedDataStr => sharedDataStr.indexOf(';')

module.exports = sharedDataStr => sharedDataStr.substr(0, objectLastIndex(sharedDataStr))
