const expect = require('chai').expect;
const utils = require('../../src/utils');

describe('Utils', () => {
  context('extractTagData', () => {
    it('should return an object containing extracted nested data', () => {
      const sharedData = { entry_data: { TagPage:[{ tag: { foo: 'bar' } }] } };

      const tagData = utils.extractTagData(sharedData);
      expect(tagData).to.eql({foo: 'bar'});
    });
  });
});
