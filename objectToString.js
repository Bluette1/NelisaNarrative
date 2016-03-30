// Dog.prototype.toString = function dogToString() {
//   var ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
//   return ret;
// }
module.exports = function(object){

  var recursiveToString = function(obj){

    var string ="";
    for(var key in obj){
      if(typeof obj[key] !== 'object'){
        string += key +": "+ obj[key] +" ";
      }
      else {
        string += key + ":{" + recursiveToString(obj[key])+"} ";

  }


    }
    return string;

  }
  //console.log(recursiveToString(object));
  return  recursiveToString(object);
}
