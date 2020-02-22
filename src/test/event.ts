const app = require('../app');
const request = require('supertest');
const mook = require('./mook');
const validFunc = require('./validationFunction');
let token;

describe('General', function() {
    before(async function() {
        await request(app)
            .post('/api/user/login')
            .send(mook.user)
            .set('Accept', 'application/json')
            .then(res => token = res.body.token)
            .catch(e => console.log(e));
    });
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
                    .expect(validFunc.validEventStruct)
                    .expect(200, done);
            });

            it('POST/C method for /api/event', function(done){
                request(app)
                    .post('/api/event')
                    .send(mook.event)
                    .set('Authorization', 'Bearer ' + token)
                    .expect(201, done);
            });

            it('PUT/U method for /api/event/:event_id', function(done){
                const eventEdit = {"title" : "Objet modifie dans les tests"};
                request(app)
                    .put('/api/event/' + mook.event._id)
                    .set('Authorization', 'Bearer ' + token)
                    .send(eventEdit)
                    .expect(validFunc.validUpdateMessage)
                    .expect(200, done);
            });

            it('GET/R after modification for /api/event/:event_id', function(done) {
                request(app)
                    .get('/api/event/' + mook.event._id)
                    .expect(200, done);
            });

            it('DELETE/D method for /api/event/:event_id', function(done){
                request(app)
                    .delete('/api/event/' + mook.event._id)
                    .set('Authorization', 'Bearer ' + token)
                    .expect(validFunc.validDeleteMessage)
                    .expect(200, done);

            });
        });
    });
});

