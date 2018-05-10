var words = ["ground", "control", "to", "major", "tom"];


 function map(array, callbackfunc) {
  var emptyArr = [];
  for (value of array) {
    emptyArr.push(callbackfunc(value));
  }
  console.log(emptyArr);
 }


map(words, function(word) {
  return word.length;
});


map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});



// Yours will take in two arguments. The first will be an array
// to map and the second will be a callback function.
// The function will return a new array based on the
// results of the callback function.


// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

// push the array into an empty array and evaluate that array using
//