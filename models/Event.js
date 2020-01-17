const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    creationDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    // Type : Post
    description:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        required: false
    },
    // Type : Event
    plannedDate:{
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Event', eventSchema);


