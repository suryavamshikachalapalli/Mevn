
const mongoose = require('mongoose');

/**
 * User or Schema
 */
const UserSchema  = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
        retype_password: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      industry: {
        type: String,
        required: true,     
      },
      hear: {
        type: String,
        
      },
      
      email: {
        type: String,
        required: true,
      unique: true
      
      },
      phone: {
        type: String,
      required: true,
      unique: true
      },
      track: {
        type: String,
      
      },
      coupon: {
        type: Number,
      },
      uname: {
        type: String,
    
      },
      address: {
        city:{
      type: String,
  
        },
        state:{
      type: String,

          },
          zip:{
            type: String,
          
            }
      },
      card: {
        type: String,
      
      },
    
    });

const User = mongoose.model('users' , UserSchema)
module.exports = User; 