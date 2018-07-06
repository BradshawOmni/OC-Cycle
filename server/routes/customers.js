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

router.put('/:id', (req, res) => {

    const { customerTypeId, cuName, cuStreet, cuCity, cuState, cuZip, cuLat, cuLong, contactName, contactEmail, contactNumber, walkThroughDate, servicesProposed, servicesSold, beenServed, websitesClientLikes, interestingClientFacts} = req.body.data;
    // var Model = JSON.parse(req.body.data);
    // // Object.assign(Model, req.body)
    // console.log(Model);


    let newCustomer = req.body.data;

    Customer.findByIdAndUpdate(req.params.id, newCustomer,  {new: true}, function(err, model) {
        if(err) {
            console.log(err);
        } else {        
           res.json(model);
        }
        
      });
});


//route to post customer data
router.post('/',  (req, res) => {    

    let newCustomer = req.body.data;

        new Customer(newCustomer).save()
        .then(customer => {
            res.json(customer);
        }).catch(err => {
            console.log(err);
        });
        
});


//route to uypdate customer data
router.put('/',  (req, res) => {

        const updatedCustomer = req.body.data;


        Customer.findByIdAndUpdate(updatedCustomer._id, updatedCustomer,  {new: true}, function(err, model) {
        if(err) {
            console.log(err);
        } else {        
           res.json(model);
        }
        
      });
});

module.exports = router;
