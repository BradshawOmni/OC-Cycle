const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');

//imports
const port =  3000;
const db = require('./config/config').db;
const sessionsSecret = require('./config/sessionConfig').secret;

//load user model
require('./models/User');
require('./models/Customer');

//Passport config
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth');
const users = require('./routes/users');
const customers = require('./routes/customers');



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
app.use(bodyParser.json());

//Middle wares needed for passport 
app.use(cookieParser());

app.use(session({ 
    secret: 'sessionsSecret',
    resave: false, 
    saveUninitialized: false
 }));
  
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/', (req, res) => res.send('Hello World!')); 

app.get('/loginError', (req, res) => res.json({
    success: false,
    message:" login failed, try again and make sure email belong to Omnicommander"
})); 

app.get('/dashboard', (req, res) => {
    res.send({
      success: true,
      message: "you are now logged in: here is your dashboard "
    });
  });

app.use('/auth', auth);

app.use('/users', users);

app.use('/customers', customers);


app.listen(port, () => {
     console.log('Example app listening on port 3000!');
     console.log(db.username);
     
});
