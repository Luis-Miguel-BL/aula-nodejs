// test/integration.test.js
const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('../server.js');

const { expect } = chai;
chai.use(chaiHTTP);

describe('Server Routes', () => {
  it('Should GET / and return hello world', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World');
        done();
      });
  });

  it('Should POST /data and return success message', (done) => {
    const data = { key: 'value' };
    chai.request(app)
      .post('/data')
      .send(data)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').eql('Success');
        expect(res.body).to.have.property('key').eql('value');
        done();
      });
  });
});
