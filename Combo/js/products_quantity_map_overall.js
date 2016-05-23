module.exports = function(file1, file2, file3, file4) {

  var n = 1,
    week = 0,
    array = [];


  while (n < 5) {
    var file = [];
    week =n;
    if (n === 1) {
      file = file1;
      // week = n;
    } else if (n === 2) {
      file = file2;
      // week = n;
    } else if (n === 3) {
      file = file3;
      // week = n;
    } else if (n === 4) {
      file = file4;
      // week = n;
    }

    for (i = 1; i < file.length; i++) {
      var factors = file[i].split(",");

      for (j = 0; j < factors.length; j++) {
        if (!(isNaN(factors[j]))) {
          var data ="";
          //var a = [];
          var date= factors[j-2].split('-');
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

          data += factors[j-1]+";"+ factors[j] + ";" + week+";"+theDate;
          //a.push(Number(factors[j]));
          array.push(data);
          //productsMap[factors[j - 1]] = a;


        }


      }
    }
    n++;
  }

  return array;

}
// var readTheFile = require('./readTheFile');
// var file1 = readTheFile('../data/week1.csv'),
//     file2 = readTheFile('../data/week2.csv'),
//     file3 = readTheFile('../data/week3.csv'),
//     file4 = readTheFile('../data/week4.csv');
// console.log(quantity_map(file1,file2,file3,file4));
