module.exports = function(productsCategoryMap, productsQuantityMap){
  var mostPopularCategory ="";
  var maxCount = 0;
  for(var category in productsCategoryMap){
    var total = 0;
    var item = productsCategoryMap[category];

    for(i=0; i < item.length; i++){
      //console.log(item[i]);

   if(productsQuantityMap.hasOwnProperty(item[i])){
     total += productsQuantityMap[item[i]];

}
}
if(maxCount ===total){
  mostPopularCategory += " and " + category;
}

if(maxCount < total){
  maxCount = total;
  mostPopularCategory = category;
}

}
var obj ={};
var theMostPopularCategory =mostPopularCategory.split(" and ");
for(i=0;i < theMostPopularCategory.length; i++){
  obj[theMostPopularCategory[i]]=maxCount;
}
return obj;
}
