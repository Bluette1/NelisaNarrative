
var least_popular_overall = function(arrayOfObjects){
var leastPopularMap={};
var leastPopular ="";
var minCount =0;
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
  if(total ===minCount){
    leastPopular += " and "+array[i];
  }

  if((total < minCount) || (minCount === 0)){
    minCount = total;
    leastPopular=array[i];
  }
}

var arrayLeastPopular = leastPopular.split(" and ");
for(i=0; i < arrayLeastPopular.length; i++){
  leastPopularMap[arrayLeastPopular[i]] =minCount;
}

console.log(leastPopularMap);
return leastPopularMap;
}

least_popular_overall([{"oranges":1}, {"melons":1, "oranges":3}, {"kiwifruit":3 },{"melons":2, "kiwifruit":1}]);
