// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212
//create function called hotOrNot with 3 args: belowBoil,boil,overBoil
hotOrNot = (temp) => {
  //below boil
  if (temp < 212){
    return `${temp} is below boiling point`
  }//above boil
  else if (temp > 212){
    return `${temp} is above boiling point`
  }//boiling
  else if (temp === 212){
    return `${temp} is at boiling point`
  }
}
console.log(hotOrNot(temp1))
console.log(hotOrNot(temp2))
console.log(hotOrNot(temp3))



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
// create a function called mult5 using forloop
const mult5 = (arr) => {
  let newArr = []
  for(let i=0; i < arr.length; i++){
    newArr.push(arr[i] * 5)
  }
  return newArr
}
console.log(mult5(myNumbers1));



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]
//creating a function using .map()
// create newArr
var newArr = myNumbers2.map(el => el * 5)
console.log(newArr);




// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"
// // creating a function called noVowels
// // create a newArr w/ vowels ["a","e","i","o","u"]
// noVowels = (thing) => {
//   let vowels = ["a","e","i","o","u"]
//   // using .split to get string into individual ""'s, filter the string for just vowels
//   return thing.split("").filter(function(el) {
//     //brings back the vowels and string, and subtract out the vowels from joined string
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join("");
// }
// console.log(noVowels(stringWithVowels1));
// console.log(noVowels(stringWithVowels2));




// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

// copy code of #4 from above

var notAString1 = true
var notAString2 = 42
var boo = typeof (true)
var num = typeof (1)
var str = typeof ("string")
//THE START OF COPIED CODE//////////////////////////
function noVowels(thing) {
  let vowels = ["a","e","i","o","u"]
  // condition for if !== string is typed using typeOf
  if (thing === boo || num)
    return `${thing}, is not a string.`
  else if (thing === str){
  // using .split to get string into individual ""'s, filter the string for just vowels
    return thing.split("").filter(function(el) {
      //brings back the vowels and string, and subtract out the vowels from joined string
      return vowels.indexOf(el.toLowerCase()) == -1;
    }).join("");
  }
}
// THE END OF COPIED CODE///////////////////////////
console.log(noVowels(notAString1));
console.log(noVowels(notAString2));



// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

// create a new var called kittyOnly that returns cats only using the .filter() method
var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

const kittyOnly = (ani) => {
  let newArr1 = [ani.filter(el => el.animal === "cat")]
  return newArr1

}
console.log(kittyOnly(toonimals));


// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// create a function called nameNoCats that takes in the array toonimals and returns the name of non cat animals

const nameNoCats = (ncat) => {
  let newArr2 = ncat.filter(el => el.animal !== "cat")
  return newArr2
}
//I can get results to print out the name and animal type of the non cats but seem to be lost on how to just print just the names.
// considered using deconstruction method but not sure how to set up witht the way the new array was set up...
console.log(nameNoCats(toonimals));
// let newArr2 = [name1, animal1]
// // console.log(nameOnly(toonimals))
// console.log(newArr2[i=2](toonimals));
