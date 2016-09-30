const objDefinitionRegex = /\{(.*?)\;/;

module.exports = html => objDefinitionRegex.exec(html)[0];

