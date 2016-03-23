module.exports =function(file){
  var CategoryList =[];
  var productsCategoryMap ={};

    for(i=0;i < file.length; i++){
    var factors = file[i].split(",");


        if(CategoryList.indexOf(factors[1]) < 0){
          CategoryList.push(factors[1]);
          productsCategoryMap[factors[1]]=[];
          productsCategoryMap[factors[1]].push(factors[0]);
          for(k=i+1;k < file.length; k++ ){
            var factrs = file[k].split(",");
            if(factrs[1]===factors[1]){
              productsCategoryMap[factors[1]].push(factrs[0])
            }
          }
      }

    }
    return productsCategoryMap;
}
