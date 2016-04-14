var mysql = require('mysql');

var readTheFile = require('./readTheFile');
var file = readTheFile('../data/categories.csv');
var products_category_map = require('./products_category_map');

var map = products_category_map(file);
var category_array =[];
for (category in map){
  var a =[];
  a.push(category);
  category_array.push(a);
}

console.log(category_array);
var mysql = require('mysql');
var connection = mysql.createConnection({
    // your connection details here
         host: 'localhost',
         user: 'bluette',
         password: 'password',
         database: 'nelisa'
});

var sql = "INSERT INTO categories (description) VALUES ?";


connection.query(sql, [category_array], function(err) {
    if (err) throw err;
    connection.end();
});

//Just do sales and purchases

// var products_price_map =  require('./products_price_map');
// var products_map = products_price_map()
// var products_array = [];
// for (var product in products_price_map){
//   var a =[];
//   a.push(product);
//   a.push(products_price_map[product]);
//   products_array.push(a);
// }
// var sql1 = "INSERT INTO products (description, price) VALUES ?";
//
// connection.query(sql1, [products_array], function(err) {
//     if (err) throw err;
//     connection.end();
// });
