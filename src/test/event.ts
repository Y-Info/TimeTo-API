const expect  = require('chai').expect;

const app = require('../app');
const request = require('supertest');

const validEventStruct = function(res) {
    if(Object.keys(res.body).length !== 0 ) {
        expect(res.body[0]).to.have.property('type').and.to.be.a('string');
        expect(res.body[0]).to.have.property('title').and.to.be.a('string');
        expect(res.body[0]).to.have.property('description').and.to.be.a('string');
    }
};

const validDeleteMessage = function(res) {
    expect(res.body).to.have.property('message').and.to.be.a('string');
};

const event = {
    _id:"5e511440e58e3d6bab689a35",
    title : "Event cree depuis les test",
    description: "Describ test",
    type: "Official",
    category: "5e46a55e96546952ee825787",
    postedBy : "5e3d33854a7c50001713c670"
};

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTRlYWY1ZDIyNjgxZTAwMTcwZjZhZGEiLCJpYXQiOjE1ODIzMDM0MjAsImV4cCI6MTU4MjM4OTgyMH0.sO0am7IXhzVl-IG1vo7ltIJjdxlp3EfuEeOQLAJzrBs";

describe ('Events', function() {
    describe ('Routes', function() {
        it('GET/ /api/event', function(done){
            request(app)
                .get('/api/event')
                .expect('Content-Type', /json/, done);
        });
        it('GET/ /api/event/:event_id', function(done){
            request(app)
                .get('/api/event/test')
                .expect('Content-Type', /json/, done);
        });
        it('PUT/ /api/event/:event_id', function(done){
            request(app)
                .put('/api/event/test')
                .expect('Content-Type', /json/, done);
        });
        it('DELETE/ /api/event/:event_id', function(done){
            request(app)
                .delete('/api/event/test')
                .expect('Content-Type', /json/, done);
        });
    });

    describe('CRUD', function() {
        it('GET/R method for /api/event', function(done) {
            request(app)
                .get('/api/event')
                .expect(validEventStruct)
                .expect(200, done);
        });

        it('POST/C method for /api/event', function(done){
            request(app)
                .post('/api/event')
                .send(event)
                .set('Authorization', 'Bearer ' + token)
                .expect(201, done);
        });

        it('GET/R after creation for /api/event/:event_id', function(done) {
            request(app)
                .get('/api/event/' + event._id)
                .expect(200, done);
        });

        it('PUT/U method for /api/event/:event_id', function(done){
            const eventEdit = {"title" : "Objet modifie dans les tests"};
            request(app)
                .put('/api/event/' + event._id)
                .set('Authorization', 'Bearer ' + token)
                .send(eventEdit)
                .expect(200, done);
        });

        it('GET/R after modification for /api/event/:event_id', function(done) {
            request(app)
                .get('/api/event/' + event._id)
                .expect(200, done);
        });

        it('DELETE/D method for /api/event/:event_id', function(done){
            request(app)
                .delete('/api/event/' + event._id)
                .set('Authorization', 'Bearer ' + token)
                .expect(validDeleteMessage)
                .expect(200, done);

        });
    });
});
