const express = require('express');
const app = express();
const port =  3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/config').db;
const passport = require('passport');

//load user model

require('./models/User');
//Passport config
require('./config/passport')(passport);
//Load Routes
const auth = require('./routes/auth');
const users = require('./routes/users');


//Mongoose connect 

let mongodbUri = `mongodb://${db.username}:${db.password}@ds123728.mlab.com:23728/omnicommander-test`;
mongoose.connect(mongodbUri) 
.then(() => {
    console.log("mongoDB connected");
    
}). catch((err) => {
    console.log(" Mongoose connection error", err);
});

let connection = mongoose.connection;

app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => res.send('Hello World!'));

app.use('/auth', auth);

app.use('/users', users);

app.listen(port, () => {
     console.log('Example app listening on port 3000!');
     console.log(db.username);
     
});
