const objDefinitionRegex = /\{(.*?)\;/;
const removeSemicolon = string => string.substr(0, string.lastIndexOf(';'));

module.exports = html => removeSemicolon(objDefinitionRegex.exec(html)[0]);
