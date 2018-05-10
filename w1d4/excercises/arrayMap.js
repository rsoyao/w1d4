var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];




var result = input.map(function(newZ){
  return (Math.sqrt(newZ.x * newZ.x + newZ.y * newZ.y));
});

// used .map function to access the input variable to individually access the arrays. created
// new Z as a "ke ey" to access the input object/variable. Then I created a function to return the square root
// of the numbers



console.log("z = " ,result[0] === 5);
console.log("z = " ,result[1] === 13);
console.log("z = " ,result[2] === 17);

// find out how to access a particular array in a variable and perform a function on it

// Related to filter, is Array.prototype.map.

// If you recall Pythagorean Theorem (x^2 + y^2 = z^2), then this should be a breeze.

// Complete the following code for the assertion to pass.
// The result should be an array of numbers corresponding
// to the x-y pairs provided in the input array
// (ie: calculate z given x and y).

