//reverseString: you should be able to reverse a string
// Example: "abc" => "cba"
function reverseString(str) {
  /**
   * can be achieved by combining: 
   *    1. string.prototype.split
   *    2. array.prototype.reverse
   *    3. array.prototype.join
   * 
   * Can even be done on one line
   */
   var splitString = str.split(""); // var splitString = "hello".split("");
   // ["h", "e", "l", "l", "o"]
   var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
  return joinArray; // "olleh"
}

//capitalize: should return the input in all-caps
// Example: "this is a string" => "THIS IS A STRING"
function capitalize(str) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeFirstLetter('foo')); // Foo

// splitString: should divide a string into substrings and return an array
// Example: "Jane,Doe,21"  =>  [ "Jane", "Doe", "21" ]
function splitString(str, splitAt = `,`) {
  return ;
}
module.exports = {
  reverseString,
  capitalize,
  splitString
};