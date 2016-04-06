// Dog.prototype.toString = function dogToString() {
//   var ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
//   return ret;
// }
module.exports = function(object) {

  var recursiveToString = function(obj) {

      var string = "";
      var count =0;
      for (var key in obj) {
        if (typeof obj[key] !== 'object') {
          count++;

          if(count > 1){
            string += "and " + key +" ";
          }
          else{
            string += key + " ";
          }
        } else {
          string += key + ":{" + recursiveToString(obj[key]) + "} ";

        }


      }

      return string.trim()+".";

    }


    //console.log(recursiveToString(object));
  return recursiveToString(object);
}
