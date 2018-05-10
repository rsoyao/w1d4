// Objects example, calling items withing an object

var myObj = {
  color: 'red',
  fruit: 'apple',
  bicycle: 'Red Norco City Glide',
  number: 1,
  stuff: ['socks', 'computer', 'tv'],
  sayHello: [Function: sayHello]
}

myObj['color']
// red
myObj.color
// red

var key = 'fruit'
myObj[key]
// apple
myObj.stuff
  // stuff: ['socks', 'computer', 'tv'],
myObj.stuff[1]
// computer

myObj.whatever
// undefined
myObj.whatever = "A different value"
// A different value

Object.keys(myObj)
// Finds all of the keys within an Obj

// NESTED OBJECTS
myObj.nested = {
  position: 'nested',
  feeling: 'super cozy and nested'
}

//  Callbacks
