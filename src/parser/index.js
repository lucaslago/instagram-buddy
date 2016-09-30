const extractSharedData = require('./extractSharedData');
const transformSharedData = require('./transformSharedData');

module.exports = html => {
  const sharedDataStr = extractSharedData(html);
  const transformedSharedData = transformSharedData(sharedDataStr);
  return JSON.parse(transformedSharedData);
};
