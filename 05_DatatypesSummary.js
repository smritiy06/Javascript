// Primitive
// 7 types:  String, Number, Boolean, null, undefined, Symbol (to make values unique), BigInt 

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const Id = Symbol("123") 
console.log(id === Id);
const bigNumber = 123456789012n    // n at last of number, the number becomes bigInt



// Reference (non-primitive)
// Array, Objects, Functions

const heros = ["Ironman" , "Doctor Strange"];   // Array
let myObj =
{
    name: "Smriti",
    age: 20
}   // inside curly braces object is stored

const myFunction = function(){
    console.log("Hello World!");  
}

console.log(typeof outsideTemp);  // datatype of null -> object
console.log(typeof myFunction);  
console.log(typeof bigNumber);  

// -----------------------------------------------------------------
//Memory 

// Stack(Primitive {original value is not changed (copy of original value is given and changed)})
// Heap(Non-primitive {original value is changed (reference of original value is given and changed)})

let name1 = "Smriti"
let newName = name1
newName = "Lucky"
console.log(name1);
console.log(newName);


let user1 = {
    email: "smriti@gmail.com",
    upi: "123@ypl"
}
let user2 = user1
user2.email = "lucky@gmail.com"

console.log(user1.email);
console.log(user2.email);
