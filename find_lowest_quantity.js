
module.exports = function(arrayOfObjects){
var leastMap={};
var least ="";
var min =0;
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
  if(total ===min){
    least += " and "+array[i];
  }

  if((total < min) || (min === 0)){
    min = total;
    least=array[i];
  }
}

//return least + ": "+ min;
var arrayLeast = least.split(" and ");
for(i=0; i < arrayLeast.length; i++){
  leastMap[arrayLeast[i]] =min;
}

//console.log(leastMap);
return leastMap;
}

// least_popular_overall([{"oranges":1}, {"melons":1, "oranges":3}, {"kiwifruit":3 },{"melons":2, "kiwifruit":1}]);
