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

        var date= factors[1].split('-');
        var month = date[1];
        switch (month) {
          case "Jan": month ="01";
          break;
          case "Feb": month ="02";
          break;
          case "Mar": month ="03";

            break;
          default:

        }
        var day = date[0];
        if(Number(day) < 10){
          day ="0"+day;
        }
        var theDate = "2016-"+month+"-"+day;


        data += cost1[1]  + ";"+factors[0] + ";" + theDate;


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
