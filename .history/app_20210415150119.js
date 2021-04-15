const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport')
const dotenv = require('dotenv')
const morgan = require('morgan')
/**
 * Initialize app to express
 */
const app = express();

/**
 * dotenv: Store secret info
 */
 dotenv.config({path:'config.env'})
 const PORT = process.env.PORT || 3000
 
 /**
  * HTTP request logger middleware for node.js
  * Logs the request with status codes
  */
 app.use(morgan('tiny'))

/**
 * body parser-  Middleware : The express.urlencoded() function is a built-in middleware function in Express. 
 * It parses incoming requests with urlencoded payloads and is based on body-parser.
 * Gets the data from form by using req.body
 */

 app.use(express.urlencoded({extended:true}));
 app.use(express.json());

/**
 * CORS(Cross-Origin Resource Sharing) is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various option
 */
 app.use(cors())

/**
 * setting up the common files -public : can be use through the code.
 */
 app.use(express.static(path.join(__dirname, 'public')))

/**
* Passport middleware : Passport is authentication middleware for Node. 
* It is designed to serve a singular purpose: authenticate requests.
*/
app.use(passport.initialize());
app.use(passport.session());

 

/** DataBase Config */
const db = require('./config/keys')
mongoose.connect(
    db, {
        useNewUrlParser : true})
        .then(() => {
            console.log(`Connected to Database successfully: ${db}`)
        }).catch(err => console.log(`Failed to connect to Database: ${err}`));

/**
 * Users Model
 */

const User = require('./model/User')

/**
 * Routes 
 */
const users = require('./routes/api/users')
app.use('/api/users', users);



 /**
 * listen to port from .dot or 3000
 */

app.listen(PORT, () =>{
    console.log(`server started on  http://localhost:${PORT}`)
})