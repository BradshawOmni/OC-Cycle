const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');


router.get('/google', passport.authenticate('google', {
    scope: [ 'profile', 'email']
}));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/loginError' }),
    (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });

  router.get('/verify', (req, res) => {
    if(req.user) {
      res.json({
        success: true,
        data: req.user
      });
    } else {
      res.json({
        success: false,
        message: "not authenticated"
      });
    }
  });

  router.get('/logout', (req, res) => {
    req.logout();
      res.redirect('/');
  });


module.exports = router;
