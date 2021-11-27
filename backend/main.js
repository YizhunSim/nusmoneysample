// import express to create backend service
const express = require("express");
// import body-parser to parse incoming requests
const bodyParser = require("body-parser");
// import cors to allow running server and client on the same system
const cors = require("cors");
// Import dotenv to import properties from .env file
require("dotenv").config();
const { auth } = require('express-openid-connect');

const { requiresAuth } = require('express-openid-connect');

const session = require('express-session');

// create a service object which will listen to clients' requests
service = express();

service.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// Import the code from user, account and transaction
const user = require("./user");
const account = require("./account");
// const transaction = require("./transaction");
const wallet_transaction = require("./wallet_transaction");
//const wallet = require("./wallet.js");
const pet = require("./pet");

const login = require("./login");

// Tell the service to use JSON parser to parse requests.
service.use(bodyParser.json());

service.use(bodyParser.urlencoded({extended : true}));

// Tell the service to use cors.
service.use(cors());

// Import API path mappings from user.js
service.use(user.router);
// Import API path mappings from account.js
service.use(account.router);
// Import API path mappings from wallet_transaction.js
service.use(wallet_transaction.router);
// Import API path mappings from pet.j`
service.use(pet.router);

service.use(login.router);

service.set('trust proxy', 1);


// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET,
//   baseURL: process.env.BASE_URL,
//   clientID: process.env.CLIENT_ID,
//   issuerBaseURL: process.env.ISSUER_BASE_URL,
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// service.use(auth(config));

// req.isAuthenticated is provided from the auth router
service.get('/', (req, res) => {
    // console.log(req.oidc.isAuthenticated());

    //   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
    response.sendFile(path.join(__dirname + '/login.html'));
});

service.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });

const port = process.env.PORT || 3000;
service.listen(port,() => {
    console.log(`Listening on port ${port}`);
});

