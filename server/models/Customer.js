const mongoose = require('mongoose');
  let Schema = mongoose.Schema;

  let CustomerSchema = new Schema({
    customerTypeId: {
        type: String
    },
    cuName: {
        type: String
    }, 
    cuStreet: {
        type: String
    },
    cuCity: {
        type: String
    },
    cuState: {
        type: String,
        default: ""
    },
    cuZip: {
        type: String,
        default: ""
    },
    cuLat: {
        type: String,
        default: ""
    },
    cuLong: {
        type: String,
        default: ""
    },
    contactName: {
        type: String,
        default: ""
    },
    contactEmail: {
        type: String,
        default: ""
    },
    contactNumber: {
        type: String,
        default: ""
    },
    walkThroughDate: {
        type: String,
        default: ""
    },
    servicesProposed: {
        type: String,
        default: ""
    },
    servicesSold: {
        type: String,
        default: ""
    },
    beenServed: {
        type: String,
        default: false
    },
    websitesClientLikes: {
        type: String,
        default: ""
    },
    interestingClientFacts: {
        type: String,
        default: ""
    }
  });


  //Create Collection and add Schema
  mongoose.model('customers', CustomerSchema);
