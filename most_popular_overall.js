var most_popular_overall = function(arrayOfObjects){
var mostPopular={};
var maxCount =0;
var array =[];
for(i=0;i < arrayOfObjects.length; i++){
  var items = arrayOfObjects[i];
  for(var key in items){
    if(array.indexOf(key) < 0){
      array.push(key);
    }

    // if(items[key] > maxCount ){
    //   maxCount =items[key];
    //   mostPopular[items]=items[key];
    // }
  }
}

for(i =0; i < array.length; i++){
  var total =0;
  for(i=0;i < arrayOfObjects.length; i++){
    var items = arrayOfObjects[i];
    for(var key in items){
    if(array[i]===key){
      total += items[key];
    }

      // if(items[key] > maxCount ){
      //   maxCount =items[key];
      //   mostPopular[items]=items[key];
      // }
    }
    if(total > maxCount){
      maxCount = total;
      mostPopular[items]=maxCount;
    }
  }

}

console.log(mostPopular);
return mostPopular;
}

most_popular_overall([{"oranges":8}, {"melons":2, "oranges":1}, {"kiwifruit":11 },{"melons":20}]);
