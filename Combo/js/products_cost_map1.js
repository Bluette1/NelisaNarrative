module.exports = function(file) {

  var array = [];

  for (j = 1; j < file.length; j++) {
    var data = "";
    var factors = file[j].split(';');




    for (k = 0; k < factors.length; k++) {
      if (!(isNaN(factors[k]))) {


        data += factors[k-1]+";"+ factors[k] + ";";

        var cost = (factors[k + 1].replace(",", ".")).split("R");

        data += cost[1] + ";";

        var cost1 = (factors[k + 2].replace(",", ".")).split("R");

        data += cost1[1]  + ";"+factors[0] + ";" + factors[1];


        array.push(data);



      }

    }



  }





  //console.log(array);
  return array;

};

// var readTheFile = require('./readTheFile');
// var file = readTheFile('../data/purchases.csv');
// products_cost_map(file);
