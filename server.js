var express = require('express');

var app = express();

//Serve up static assets from public
app.use(express.static('public'));

var PORT = process.env.PORT || 8080;

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs ({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give server access to them
var routes = require('./controllers/controller.js');

app.use(routes);

// Start the server so that it begins listening to client requests.
app.listen(PORT, function() {
    //log when the server has started
    console.log('Server listening on http://localhost:' + PORT);
});