const mongoose = require('mongoose');
  let Schema = mongoose.Schema;

  let UserSchema = new Schema({
    googleID: {
        type: String,
        required: true
    } ,
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    }, 
    lastName: {
        type: String
    },
    role: {
        type: String,
        default: "sales"
    }
  });


  //Create Collection and add Schema
  mongoose.model('users', UserSchema);
