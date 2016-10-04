const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../src/app');

describe('GET /:hashtag', function() {
  this.timeout(5000);
  it('should respond with hashtag images url as json', done => {
    const hashtag = 'testing';
    supertest(app)
      .get(`/${hashtag}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.name).to.eql(hashtag);
        expect(res.body.top_posts).to.exist;
        expect(res.body.top_posts.nodes.length).to.be.at.least(5);
        expect(res.body.media).to.exist;
        expect(res.body.media.page_info).to.exist;
        expect(res.body.media.count).to.exist;
        expect(res.body.media.nodes.length).to.be.at.least(10);
        done(err);
      });
  });

  it('should respond with empty nodes array when no results for a tag is found', done => {
    const hashtag = 'ihopethisisneverfounduhnvxnmgndfgndfgn';
    supertest(app)
      .get(`/${hashtag}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.name).to.eql(hashtag);
        expect(res.body.top_posts).to.exist;
        expect(res.body.top_posts.nodes.length).to.eql(0);
        expect(res.body.media).to.exist;
        expect(res.body.media.page_info).to.exist;
        expect(res.body.media.count).to.exist;
        expect(res.body.media.nodes.length).to.eql(0);
        done(err);
      });
  });

  it('should respond with proper status code when unhandled exception occurs', done => {
    supertest(app)
      .get('/mamba')
      .expect(404)
      .end((err, res) => {
        done(err);
      });
  });
});
