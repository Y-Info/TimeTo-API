const expect  = require('chai').expect;
const mook = require('./mock');

const createMessage = 'Objet enregistré !';
const deleteMessage = 'Objet supprime !';
const updateMessage = 'Objet modifie !';


exports.validCreateMessage = function(res) {
    expect(res.body).to.have.property('message').and.to.be.a('string').and.to.include(createMessage);
};
exports.validDeleteMessage = function(res) {
    expect(res.body).to.have.property('message').and.to.be.a('string').and.to.include(deleteMessage);
};

exports.validUpdateMessage = function(res) {
    expect(res.body).to.have.property('message').and.to.be.a('string').and.to.include(updateMessage);
};

exports.validEventStructTable = function(res) {
    if(Object.keys(res.body).length !== 0 ) {
        expect(res.body[0]).to.have.property('type').and.to.be.a('string');
        expect(res.body[0]).to.have.property('title').and.to.be.a('string');
        expect(res.body[0]).to.have.property('description').and.to.be.a('string');
    }
};

exports.validEventPropertyPost = function( res ) {
    expect(res.body).to.have.property('type').and.to.be.a('string').and.to.include(mook.event.type);
    expect(res.body).to.have.property('title').and.to.be.a('string').and.to.include(mook.event.title);
    expect(res.body).to.have.property('description').and.to.be.a('string').and.to.include(mook.event.description);
};

exports.validEventPropertyUpdate = function( res ) {
    expect(res.body).to.have.property('type').and.to.be.a('string').and.to.include(mook.eventEdit.type);
    expect(res.body).to.have.property('title').and.to.be.a('string').and.to.include(mook.eventEdit.title);
    expect(res.body).to.have.property('description').and.to.be.a('string').and.to.include(mook.eventEdit.description);
};

exports.validEventPropertyDelete = function( res ) {
    expect(res.body).to.equal(null);
};
