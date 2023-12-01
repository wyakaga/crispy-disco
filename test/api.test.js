import chai from 'chai';
import supertest from 'supertest';

import app from '../src/index.js';

const { expect } = chai;
const request = supertest(app);

describe('API test', () => {
  it('should return status: success from / endpoint', (done) => {
    request
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).to.equal('success');
        return done();
      });
  });
});

describe('API test', () => {
  it('should return status: success & data array from /api/user endpoint', (done) => {
    request
      .get('/api/user')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).to.equal('success');
        expect(res.body.data).to.be.an('array');
        return done();
      });
  });
});
