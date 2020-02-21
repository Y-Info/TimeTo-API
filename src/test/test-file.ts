const expect  = require('chai').expect;
const request = require('request');
const chai = require('chai');
chai.use(require('chai-json'));

const app = require('../app');
const super_request = require('supertest');


describe('Status and content', function() {
    describe ('Event part', function() {
        it('status', function(done){
            request('http://localhost:4000/api/event', function(error, response) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://localhost:4000/api/event' , function(error, response, body) {

                expect(body).to.be.a.jsonObj();

                const obj = JSON.parse(body);

                if(Object.keys(obj).length !== 0 ){
                    expect(obj[0]).to.have.property('type');
                    expect(obj[0].type).to.be.a('string');
                    expect(obj[0]).to.have.property('description');
                    expect(obj[0].description).to.be.a('string');
                    expect(obj[0]).to.have.property('title');
                    expect(obj[0].title).to.be.a('string');
                }
                done();
            });
        });
        it('responds with json', function(done) {
            super_request(app)
                .get('/api/event')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});
