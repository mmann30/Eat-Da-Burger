// Node dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Initializing an Express app
var app = express();

// Establishing a PORT
var PORT = process.env.PORT || 3000;


// Middleware goes here...

// Routing goes here...



// Starting Server
app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
});