const expect  = require('chai').expect;

const app = require('../app');
const request = require('supertest');

// get a reference to your required module
const globalVar = require('./variable');

const validLoginRes = function(res) {
    expect(res.body).to.have.property('userId').and.to.be.a('string');
    expect(res.body).to.have.property('name').and.to.be.a('string');
    expect(res.body).to.have.property('avatar').and.to.be.a('string');
    expect(res.body).to.have.property('token').and.to.be.a('string');
};
describe('Status and content', function() {
    describe ('User part', function() {
        it('Post/ login json', function(done) {
            request(app)
                .post('/api/user/login')
                .send(globalVar.user)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(validLoginRes)
                .expect(200, done);
        });
    });
});
