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

describe('API test', () => {
  it('should return status: success & data from /api/user/:id endpoint', (done) => {
    request
      .get('/api/user/1')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.status).to.equal('success');
        expect(res.body.data.id).to.be.a('number');
        expect(res.body.data.id).to.equal(1);
        expect(res.body.data.name).to.be.a('string');
        expect(res.body.data.name).to.equal('Jhon');
        expect(res.body.data.name).to.be.a('string');
        expect(res.body.data.email).to.equal('jhon@gmail.com');
        return done();
      });
  });
});
