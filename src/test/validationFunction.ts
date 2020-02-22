const expect  = require('chai').expect;

const deleteMessage = 'Objet supprime !';
const updateMessage = 'Objet modifie !';

const validDeleteMessage = function(res) {
    expect(res.body).to.have.property('message').and.to.be.a('string').and.to.include(deleteMessage);
};

const validUpdateMessage = function(res) {
    expect(res.body).to.have.property('message').and.to.be.a('string').and.to.include(updateMessage);
};

const validEventStruct = function(res) {
    if(Object.keys(res.body).length !== 0 ) {
        expect(res.body[0]).to.have.property('type').and.to.be.a('string');
        expect(res.body[0]).to.have.property('title').and.to.be.a('string');
        expect(res.body[0]).to.have.property('description').and.to.be.a('string');
    }
};

// export
exports.validDeleteMessage = validDeleteMessage;
exports.validUpdateMessage = validUpdateMessage;
exports.validEventStruct = validEventStruct;
