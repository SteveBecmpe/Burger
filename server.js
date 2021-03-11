const express = require('express');

const PORT = process.env.PORT || 8080;//PORT is deployed use, 8080 local use.

const app = express();// best practices, app variable as express method

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));// static is client side docs, JS and CSS

// Parse application body as JSON
app.use(express.urlencoded({ extended: true })); // middle ware for express
app.use(express.json()); // allows express to use json objects

// Set Handlebars.
const exphbs = require('express-handlebars');// express to used handlebars

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));// use handlebars as the template framework format, default template main.handlebar
app.set('view engine', 'handlebars');// sets the view engine to handlebars

// Import routes and give the server access to them.
const routes = require('./controllers/burgersController.js');// CRUD routes

app.use(routes);// express use the burger routes

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>// starts the server and listens on a port, and displayes port to consolelog
  console.log(`Server listening on: http://localhost:${PORT}`)
);
