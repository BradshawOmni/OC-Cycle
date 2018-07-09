const jwt =  require('jsonwebtoken');
const mongoose = require('mongoose');
const secret = require('../config/config');

//load user model
const User = mongoose.model('users');

module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if(req.isAuthenticated()) {
            return next();
        } else {
            res.json({
                success: false,
                message: "You are not authenticated"
            });
        }
    },
    
    isAuthenticated: (req, res, next) => {
        const authorizationHeader = req.headers['authorization'];
        let token;

        if (authorizationHeader) {
            token = authorizationHeader.split(' ')[1];
        }

        if (token) {
            jwt.verify(token, secret.jwtSecret.secret, (err, decoded) => {
            if (err) {
                res.status(401).json({ error: 'Failed to authenticate' });
            } else {
                User.findById(decoded.id, (err, user) => {
                    if(err) {
                        console.log(err);
                        
                    } else {
                        if (!user) {
                            res.status(404).json({ error: 'No such user' });
                        } else {
                            req.currentUser = user;
                            next();
                    }
                }
                });
            }
            });
        } else {
            res.status(403).json({
            error: 'No token provided'
            });
        }
    }
};
