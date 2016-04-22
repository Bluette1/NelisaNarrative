var mysql = require('mysql');



var mysql = require('mysql');
var connection = mysql.createConnection({
    // your connection details here
         host: 'localhost',
         user: 'bluette',
         password: 'password',
         database: 'nelisa'
});

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
var sql = "INSERT INTO categories (description) VALUES ?";


// connection.query(sql, [category_array], function(err) {
//     if (err) throw err;
//     connection.end();
// });


var readTheFile = require('./readTheFile');
var file1 = readTheFile('../data/week1.csv'),
    file2 = readTheFile('../data/week2.csv'),
    file3 = readTheFile('../data/week3.csv'),
    file4 = readTheFile('../data/week4.csv'),
    categories = readTheFile('../data/categories.csv');
var products_price_map_overall =  require('./products_price_map_overall');
var products_price_map = products_price_map_overall(file1,file2,file3,file4);
var products_array = [];
for (var product in products_price_map){
  var a = [];
  a.push(product);
  a.push(products_price_map[product]);

for(i=0;i < categories.length;i++){
 var factors = categories[i].split(",");
 if (product === factors[0]){
   a.push(factors[1]);
 }



}


products_array.push(a);

}
console.log(products_array);


// var sql1 = "INSERT INTO products (description, price,category) VALUES ?";
//
// connection.query(sql1, [products_array], function(err) {
//     if (err) throw err;
//     connection.end();
// });


var products_quantity_map = require('./products_quantity_map_overall');

var array = products_quantity_map(file1,file2,file3,file4);
var sales_array =[];

for(i = 0; i < array.length; i++){
  var data = array[i].split(" ");
  var productName = "";
  var numbers = [];
  var a =[];

  for(j=0; j < data.length; j++){
    if(!isNaN(data[j]) && !isNaN(data[j+1]) ) {
    for(k=0;k < j; k++)  {
        productName += data[k]+" ";
    }

    numbers.push(data[j]);
    numbers.push(data[j+1]);
    }



    }

    a.push(productName.trim());
    a.push(numbers[0]);
    a.push(numbers[1]);
    sales_array.push(a);
  }



//console.log(sales_array);

// var sql2 = "INSERT INTO sales (description, quantity, week) VALUES ?";
//
// connection.query(sql2, [sales_array], function(err) {
//     if (err) throw err;
//     connection.end();
// });

var products_cost_map = require('./products_cost_map1');
var purchases = readTheFile('../data/purchases.csv');
var arr =  products_cost_map(purchases);
var purchases_array = [];
console.log(arr);
for(i=0; i < arr.length; i++){
  var a=[];
  var data = arr[i].split(";");

  for(j=0; j < data.length; j++){
  a.push(data[j]);
}
purchases_array.push(a);
}

//console.log(purchases_array);

var sql3 = "INSERT INTO purchases (description, quantity, cost, total_cost, shop, date) VALUES ?";
//
connection.query(sql3, [purchases_array], function(err) {
    if (err) throw err;
    connection.end();
});
