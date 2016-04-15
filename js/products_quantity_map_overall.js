var quantity_map = function(file1, file2, file3, file4) {

  var n = 1,
    week = 0,
    array = [];


  while (n < 5) {
    var file = [];
    if (n === 1) {
      file = file1;
      week = 1;
    } else if (n === 2) {
      file = file2;
      week = 2;
    } else if (n === 3) {
      file = file3;
      week = 3;
    } else if (n === 4) {
      file = file4;
      week = 4;
    }

    for (i = 1; i < file.length; i++) {
      var factors = file[i].split(",");

      for (j = 0; j < factors.length; j++) {
        if (!(isNaN(factors[j]))) {
          var data ="";
          //var a = [];
          data += factors[j-1]+" "+ factors[j] + " " + week;
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
var readTheFile = require('./readTheFile');
var file1 = readTheFile('../data/week1.csv'),
    file2 = readTheFile('../data/week2.csv'),
    file3 = readTheFile('../data/week3.csv'),
    file4 = readTheFile('../data/week4.csv');
console.log(quantity_map(file1,file2,file3,file4));
