// ASSESSMENT 1: INTRO TO JAVASCRIPT TESTING WITH JEST
// Coding practical questions

// To set up the testing environment run the following commands in terminal
// $ npm -g install yarn
// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest
describe("hello", () => {
  test ("returns a string that says hi", () => {
    expect(hello()).toEqual("hi")
  })
})
const hello = () => {
  return "hi"
}


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.
describe("addThemUp", () => {
  test ("a + b = sum of a and b", () => {
    expect(addThemUp(1,2)).toEqual(3)
  })
})



// --------------------1b) See the test fail. THEN write the code to make the test pass.
const addThemUp = (a, b) => {
    return a + b
  }





// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () => {
  test (" base * height / 2", () => {
    expect(triangleArea(3,4)).toEqual(6)
  })
})



// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (b, h) => {
  return b * h / 2
}
