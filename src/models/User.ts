const mongoose = require('mongoose');

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
    required: false,
    default: "member"
  },
});

userSchema.plugin(uniqueValidator);

export const User = mongoose.model('User', userSchema);


