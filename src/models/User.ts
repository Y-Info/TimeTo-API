const mongoose = require('mongoose');
import {Schema} from 'mongoose';

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  },
  avatar:{
    type: String,
    required: false,
    default: "test.png"
  },
  role:{
    type: String,
    required: true,
    default: "member",
    enum: ['member','admin','approved']
  },
  postedEvent: [{
    type: Schema.Types.ObjectId,
    ref: 'Event',
    require: false
  }]
});

userSchema.plugin(uniqueValidator);

export const User = mongoose.model('User', userSchema);
