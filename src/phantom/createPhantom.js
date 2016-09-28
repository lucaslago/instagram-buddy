const phantom = require('phantom');
const state = {
  phInstance: undefined,
  sitePage: undefined
};

phantom.create()
  .then(instance => {
    state.phInstance = instance;
    return instance.createPage();
  })
  .then(page => {
    state.sitePage = page;
  });

module.exports = state;

