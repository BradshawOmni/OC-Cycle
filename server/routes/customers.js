const express = require('express');
const router = require('express-promise-router')();
const {ensureAuthenticated} = require('../helpers/auth');
const mongoose = require('mongoose');

//load user mmodel
const Customer = mongoose.model('customers');


//route to get all customers
router.get('/',  (req, res) => {
    Customer.find({}, function(err, customers) {
        if(err) {
            console.log(err);
        } else {
            var customerMap = {};
    
            customers.forEach(function(customer) {
                customerMap[customer._id] = customer;
            });
        
            res.send(customerMap);  
        }
        
      });
});


//route to get single customer
router.get('/:id', (req, res) => {
    User.findById(req.params.id, function(err, customer) {
        if(err) {
            console.log(err);
        } else {        
            res.send(customer);  
        }
        
      });
});


//route to post customer data
router.post('/',  (req, res) => {

    const {customerId, customerTypeId, cuName, cuStreet, cuCity, cuState, cuZip, cuLat, cuLong, contactName, contactEmail, contactNumber, walkThroughDate, servicesProposed, servicesSold, beenServed, websitesClientLikes, interestingClientFacts} = req.body;
    var Model;
    // Object.assign(Model, req.body)
    console.log(Model);

    let newCustomer = {
        customerId, 
        customerTypeId,
        cuName,
        cuStreet,
        cuCity,
        cuState,
        cuZip,
        cuLat,
        cuLong,
        contactName,
        contactEmail,
        contactNumber,
        walkThroughDate,
        servicesProposed,
        servicesSold,
        beenServed,
        websitesClientLikes,
        interestingClientFacts
    }
        new Customer(newCustomer).save()
                    .then(customer => {
                        res.json({
                            success: true,
                            data: customer
                        });
                    }).catch(err => {
                        console.log(err);
                    });
});

module.exports = router;
