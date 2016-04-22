'use strict';

var express = require('express'),
    exphbs  = require('express-handlebars'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    categories = require('./routes/categories'),
    products = require('./routes/products'),
    sales = require('./routes/sales'),
    purchases = require('./routes/purchases');


var app = express();

var dbOptions = {
      host: 'localhost',
      user: 'bluette',
      password: 'password',
      port: 3306,
      database: 'nelisa'
};

//setup template handlebars as the template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}

//setup the handlers

app.get('/categories', categories.show);
app.get('/categories/add', categories.showAdd);
app.get('/categories/edit/:id', categories.get);
app.post('/categories/update/:id', categories.update);
app.post('/categories/add', categories.add);
//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/categories/delete/:id', categories.delete);

app.get('/sales', sales.show);
app.get('/sales/add', sales.showAdd);
app.get('/sales/edit/:id', sales.get);
app.post('/sales/update/:id', sales.update);
app.post('/sales/add', sales.add);
//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/sales/delete/:id', sales.delete);

app.get('/', products.show);
app.get('/products', products.show);
app.get('/products/edit/:id', products.get);
app.post('/products/update/:id', products.update);
app.get('/products/add', products.showAdd);
app.post('/products/add', products.add);

//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/products/delete/:id', products.delete);

app.get('/purchases', purchases.show);
app.get('/purchases/add', purchases.showAdd);
app.get('/purchases/edit/:id', purchases.get);
app.post('/purchases/update/:id', purchases.update);
app.post('/purchases/add', purchases.add);
//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/purchases/delete/:id', purchases.delete);

app.use(errorHandler);

//configure the port number using and environment number
var portNumber = process.env.CRUD_PORT_NR || 3001;

//start everything up
app.listen(portNumber, function () {
    console.log('Create, Read, Update, and Delete (CRUD) example server listening on:', portNumber);
});