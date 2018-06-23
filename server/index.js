"use strict";

// Basic express setup:
require('dotenv').config();
//const PORT          = 8080;
const PORT = process.env.PORT || 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();




// Create a server, uses `handleRequest` which is function that takes
// care of providing requested dataconst server = http.createServer(handleRequest);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = process.env.MONGODB_URI;
//const MONGODB_URI = "mongodb://localhost:27017/tweeter";
//const MONGODB_URI = "mongodb://admin:abc123MNO@ds115971.mlab.com:15971/khoatweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
 
const DataHelpers = require("./lib/data-helpers.js")(db);

// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
const tweetsRoutes = require("./routes/tweets")(DataHelpers);

// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

});



 
