const expect  = require('chai').expect;

const app = require('../app');
const request = require('supertest');

const validEventRes = function(res) {
    if(Object.keys(res.body).length !== 0 ) {
        expect(res.body[0]).to.have.property('type').and.to.be.a('string');
        expect(res.body[0]).to.have.property('title').and.to.be.a('string');
        expect(res.body[0]).to.have.property('description').and.to.be.a('string');
    }
};

let event = {
    "title" : "Event cree depuis les test",
    "description": "Describ test",
    "type": "Official",
    "category": "5e46a55e96546952ee825787",
    "postedBy" : "5e3d33854a7c50001713c670"
};

let eventtest = {};

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTRlYWY1ZDIyNjgxZTAwMTcwZjZhZGEiLCJpYXQiOjE1ODIzMDM0MjAsImV4cCI6MTU4MjM4OTgyMH0.sO0am7IXhzVl-IG1vo7ltIJjdxlp3EfuEeOQLAJzrBs";


it('Test POST method for /api/event', function(done){
    request(app)
        .post('/api/event')
        .send(event)
        .set('Authorization', 'Bearer ' + token)
        .expect(201)
        .end(function(err, res){
            if(err){
                return done(err);
            }
            eventtest = res.body;
            done();
        });
});

it('Test PUT method for /api/event/:event_id', function(done){
    const eventEdit = {"title" : "Objet modifie dans les tests"};
    console.log(eventtest._id);
    request(app)
        .put('/api/event/' + eventtest._id)
        .set('Authorization', 'Bearer ' + token)
        .send(eventEdit)
        .expect(200, done);
});



describe('Status and content', function() {
    describe ('Event part', function() {
        it('status', function(done){
            request(app)
                .get('/api/event')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        it('content', function(done) {
            request(app)
                .get('/api/event')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(validEventRes)
                .expect(200, done);
        });
    });
});
