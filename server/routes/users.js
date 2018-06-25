const express = require('express');
const router = require('express-promise-router')();
const {ensureAuthenticated} = require('../helpers/auth');
const mongoose = require('mongoose');

//load user mmodel
const User = mongoose.model('users');

router.get('/', ensureAuthenticated, (req, res) => {
    console.log(req.user);
        res.send(req.user);
});

router.get('/all', ensureAuthenticated, (req, res) => {
    User.find({}, function(err, users) {
        if(err) {
            console.log(err);
        } else {
            var userMap = {};
    
            users.forEach(function(user) {
              userMap[user._id] = user;
            });
        
            res.send(userMap);  
        }
        
      });
});

router.get('/update-role', ensureAuthenticated,  (req, res) => {
        if(req.user.role === '') {
            res.send('you are not an admin');
        }
});

module.exports = router;
