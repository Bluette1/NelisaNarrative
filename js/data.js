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

//console.log(category_array);
var mysql = require('mysql');
var connection = mysql.createConnection({
    // your connection details here
         host: 'localhost',
         user: 'bluette',
         password: 'password',
         database: 'nelisa'
});

// var sql = "INSERT INTO categories (description) VALUES ?";
//
//
// connection.query(sql, [category_array], function(err) {
//     if (err) throw err;
//     connection.end();
// });


var readTheFile = require('./readTheFile');
var file1 = readTheFile('../data/week1.csv'),
    file2 = readTheFile('../data/week2.csv'),
    file3 = readTheFile('../data/week3.csv'),
    file4 = readTheFile('../data/week4.csv');
var products_price_map_overall =  require('./products_price_map_overall');
var products_price_map = products_price_map_overall(file1,file2,file3,file4);
var products_array = [];
for (var product in products_price_map){
  var a = [];
  a.push(product);
  a.push(products_price_map[product]);
  products_array.push(a);
}
console.log(products_array);
//
// var sql1 = "INSERT INTO products (description, price) VALUES ?";
//
// connection.query(sql1, [products_array], function(err) {
//     if (err) throw err;
//     connection.end();
// });

var products_quantity_map = require('./products_quantity_map');
console.log(products_quantity_map(file1));
