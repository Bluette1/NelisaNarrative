
module.exports = function(arrayOfObjects){
var mostMap={};
var most ="";
var max =0;
var array =[];
for(i=0;i < arrayOfObjects.length; i++){
  var items = arrayOfObjects[i];
  for(var key in items){
    if(array.indexOf(key) < 0){
      array.push(key);
    }

  }
}

for(i =0; i < array.length; i++){
  var total =0;
  for(j=0;j < arrayOfObjects.length; j++){
    var items = arrayOfObjects[j];
    for(var key in items){
    if(array[i]===key){


      total += items[key];
    }

    }

  }
  if(total ===max){
    most += " and "+array[i];
  }

  if(total > max){
    max= total;
    most=array[i];
  }
}

//return most +": "+ max;
var arrayMost = most.split(" and ");
for(i=0; i < arrayMost.length; i++){
  mostMap[arrayMost[i]] =max;
}

//console.log(mostMap);
return mostMap;
}

//most_popular_overall([{"oranges":1}, {"melons":11, "oranges":30}, {"kiwifruit":31 },{"melons":20}]);
