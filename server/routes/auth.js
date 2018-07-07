const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const secret = require('../config');


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

      const token = jwt.sign({
        _id: req.user._id
      }, secret.jwtSecret);

      res.cookie("t", token, {
        expire: new Date() + 9999
      });
      res.json({
        token,
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
    res.clearCookie("t");
    req.logout();
      res.json({
        message: "signed out"
      });
  });


module.exports = router;
