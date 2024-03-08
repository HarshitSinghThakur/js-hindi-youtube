// For interviews



//  Primitive  //Call by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//null = empty not 0
//symbol is used to make unique dt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)   //Call by reference

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];      //Array  

let myObj = {                                //Object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){                    //function
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (primitive) --- call by value 
// Heap (Non-primitive) ---call by reference

let myYoutubename = "harshit"

let anothername = myYoutubename
anothername= "singh"

console.log(myYoutubename)        // harshit
console.log(anothername)            //singh



//Object 

let userOne = {
    email: "user@google.com"
    upi : "user@ubl"
}

let userTwo = userone

userTwo.email = "harshit@google.com"    //use dot operator to access the object

console.log(userOne.email) //harshit@google.com
console.log(userTwo.email)    //harshit@google.com

