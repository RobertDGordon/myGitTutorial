const Sentiment = require('sentiment'); //imports package

const sentimentPackage = new Sentiment();

const result = sentimentPackage.analyze('Cats are cool.') //what this returns will = result

console.log(result)

// var variable = 'this' //this can be changed

// const variable_2 = 'cannot be changed'

// variable_2 = 'something else' // this will error

// let variable_3 = 'can be changed'

// variable_3 = 'change to something else' // this will not error

// function SayHello(variable, variable_2){
//   console.log(variable, variable_2)
// }

// SayHello("Good Evening!", 'Hello Cool People!')

// function Sum(A, B){

//   return A + B
// }

// function isCool(name){
//   if(name === 'Robert'){
//     return true
//   } else {
//     return false
//   }
// }

// function checkCoolness(name){
//   const cool = isCool(name) // true
//   if (cool === true){
//     console.log(name, 'is cool!')
//   } else { //false
//     console.log(name, 'is not cool.')
//   }
// }

// checkCoolness('Rob')

// console.log(Sum(2, 2))

// console.log(Sum(5, 1))