//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

let str = "name"; //string type
let str2 = "name"; //string type

const score = 100; //this is number type
const scoreValue = 100.3; //this is also number type

const isLoggedIn = false; //boolean type
const isLoggedOut = true; //boolean type

const outsideTemp = null; // null type
let userEmail; //define but not assign so undefined type

const id = Symbol("123"); //symbol type
const anotherId = Symbol("123"); //symbol type

console.log(id === anotherId); //false because of different reference

const bigNumber = 3456543576654356754n; //bigInt type use for large no 2^53

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Array type
let myObj = {
  name: "hitesh",
  age: 22,
}; // object type

const myFunction = function () {
  console.log("Hello world");
}; // function type

console.log(typeof anotherId); // type of is a method that says what type data type the variable is
