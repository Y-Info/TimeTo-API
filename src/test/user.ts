// const expect  = require('chai').expect;
//
// const app = require('../app');
// const request = require('supertest');
//
// const mook = require('./mook');
//
// const validLoginRes = function(res) {
//     expect(res.body).to.have.property('userId').and.to.be.a('string');
//     expect(res.body).to.have.property('name').and.to.be.a('string');
//     expect(res.body).to.have.property('avatar').and.to.be.a('string');
//     expect(res.body).to.have.property('token').and.to.be.a('string');
// };
// describe('Status and content', function() {
//     describe ('User part', function() {
//         it('Post/ login json', function(done) {
//             request(app)
//                 .post('/api/user/login')
//                 .send(mook.user)
//                 .set('Accept', 'application/json')
//                 .expect('Content-Type', /json/)
//                 .expect(validLoginRes)
//                 .expect(200, done);
//         });
//     });
// });
