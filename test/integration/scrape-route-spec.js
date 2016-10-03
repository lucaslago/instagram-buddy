const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../src/app');

describe('GET /:hashtag', function() {
  this.timeout(5000);
  it('respond with json', done => {
    supertest(app)
      .get('/testing')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.media).to.exist;
        expect(res.body.top_posts).to.exist;
        expect(res.body.name).to.exist;
        expect(res.body.media.nodes.length).to.be.at.least(10);
        done(err);
      });
  });
});
