
module.exports = function(arrayOfObjects){
var mostPopularMap={};
var mostPopular ="";
var maxCount =0;
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
  if(total ===maxCount){
    mostPopular += " and "+array[i];
  }

  if(total > maxCount){
    maxCount = total;
    mostPopular=array[i];
  }
}

var arrayMostPopular = mostPopular.split(" and ");
for(i=0; i < arrayMostPopular.length; i++){
  mostPopularMap[arrayMostPopular[i]] =maxCount;
}

console.log(mostPopularMap);
return mostPopularMap;
}

//most_popular_overall([{"oranges":1}, {"melons":11, "oranges":30}, {"kiwifruit":31 },{"melons":20}]);
