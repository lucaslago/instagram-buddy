const extractSharedData = require('./extractSharedData');

module.exports = html => {
  const sharedDataStr = extractSharedData(html);
  return JSON.parse(sharedDataStr);
};
