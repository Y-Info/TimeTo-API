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
    type: Schema.Types.ObjectId,
    ref: 'Role',
    required: false,
    //default: "member"
  },
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }]
});

userSchema.plugin(uniqueValidator);

export const User = mongoose.model('User', userSchema);


