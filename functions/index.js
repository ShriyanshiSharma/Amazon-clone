const functions = require("firebase-functions");
const express = require("express")

const cors = require("cors")


const stripe = require("stripe")

("sk_test_51MqIo2SHcP4QE2ro8JJaogYHbf78kZcZdgyZZauZWqUstoilLkMFxnnV366OVXLWZYjMk8QbF81jqAz8R32VuFKp00J1wyxjED")


// --API 


// --APP CONFIG 
const app = express();

// --MIDDLEWARES 
app.use(cors({origin:true}));
app.use(express.json());

// --API ROUTES 


app.get("/" ,(request,response) => response.status(200).send("hello world"))
app.post('/payment/create')
// -- LISTEN COMMAND 

exports.api = functions.https.onRequest(app)