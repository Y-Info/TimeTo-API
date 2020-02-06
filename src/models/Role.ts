const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
});

export const Role = mongoose.model('Role', roleSchema);
