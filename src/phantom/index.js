const phantomState = require('./createPhantom');

const grabInstagramImages = (hashtag) => {
  const promise = new Promise((resolve, reject) => {
    const url = `https://www.instagram.com/explore/tags/${hashtag}/`;

    phantomState.sitePage.open(url)
      .then(status => {
        return phantomState.sitePage.property('content');
      })
      .then(content => {
        resolve(content);
      })
      .catch(err => {
        phantomState.phInstance.exit();
        reject(err);
      });
  });
  return promise;
};

module.exports = grabInstagramImages;
