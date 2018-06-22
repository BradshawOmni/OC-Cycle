const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');


router.get('/google', passport.authenticate('google', {
    scope: [ 'profile', 'email']
}));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });


module.exports = router;
