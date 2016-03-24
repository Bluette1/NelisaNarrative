module.exports = function(productsCategoryMap, productsQuantityMap){
  var leastPopularCategory="";
  var minCount = 0;
  for(var category in productsCategoryMap){
    var total = 0;
    var item = productsCategoryMap[category];

    for(i=0; i < item.length; i++){
      //console.log(item[i]);

   if(productsQuantityMap.hasOwnProperty(item[i])){
     total += productsQuantityMap[item[i]];

}
}
if(minCount ===total){
  leastPopularCategory+= " and " + category;
}

if(minCount > total  || minCount===0){
  minCount = total;
  leastPopularCategory= category;
}

}
var obj ={};
var theLeastPopularCategory =leastPopularCategory.split(" and ");
for(i=0;i < theLeastPopularCategory.length; i++){
  obj[theLeastPopularCategory[i]]=minCount;
}
return obj;
}
