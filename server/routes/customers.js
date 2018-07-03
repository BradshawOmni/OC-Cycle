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
            // var customerMap = {};
    
            // customers.forEach(function(customer) {
            //     customerMap[customer._id] = customer;
            // });
        
            res.send(customers);  
        }
        
      });
});


//route to get single customer
router.get('/:id', (req, res) => {
    Customer.findById(req.params.id, function(err, customer) {
        if(err) {
            console.log(err);
        } else {        
            res.send(customer);  
        }
        
      });
});


//route to delete a customer
router.delete('/:id', (req, res) => {
    Customer.deleteOne({_id: req.params.id}, function(err) {
        if(err) {
            console.log(err);
        } else {        
           res.json({
               success: true,
               message: "customer deleted"
           });
        }
        
      });
});


//route to post customer data
router.post('/',  (req, res) => {

    const {customerId, customerTypeId, cuName, cuStreet, cuCity, cuState, cuZip, cuLat, cuLong, contactName, contactEmail, contactNumber, walkThroughDate, servicesProposed, servicesSold, beenServed, websitesClientLikes, interestingClientFacts} = JSON.parse(req.body.data);
    // var Model = JSON.parse(req.body.data);
    // // Object.assign(Model, req.body)
    // console.log(Model);

    let newCustomer = {
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
    console.log(newCustomer);
        new Customer(newCustomer).save()
                    .then(customer => {
                        res.json(customer);
                    }).catch(err => {
                        console.log(err);
                    });
});

module.exports = router;
