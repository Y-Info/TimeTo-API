const mongoose = require('mongoose');
import {Schema} from 'mongoose';

const eventSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true,
        default: "Standard",
        enum : ["Standard", "Official", "Approved"]
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    creationDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    postedBy:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
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

export const Event = mongoose.model('Event', eventSchema);
