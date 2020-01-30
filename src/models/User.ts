const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  avatar:{
    type: String,
    required: true,
  },
  role:{
    type: String,
    required: true,
  },
});

export const User = mongoose.model('User', eventSchema);


