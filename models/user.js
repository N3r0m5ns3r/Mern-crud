const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuidv1');

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    trim: true,
    required: true,
    maxLength: 32
  },
  email: {
    type: sting,
    trim: true,
    required: true,
    unique: 32
  },
  hashed_password: {
    type: string,
    required: true
  },
  about: {
    type: string,
    trim: true
  },
  salt: string,
  role: {
    type:number,
    default: 0
  },
  history: {
    type: array,
    default: []
  }
}, {timestamps: true})

// virtual field
userSchema, 
