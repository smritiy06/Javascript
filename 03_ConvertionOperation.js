let score = true

// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// console.log(valueInNumber);  


/* "33" -> 33
    "33ab" -> NaN
    true -> 1,  false -> 0
*/

let isLoggedIn = "smriti"

let BooleanLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanLoggedIn);


/* 1 -> true
    0 -> false
    "smriti" -> true
    "" -> false
*/


let a = 33
let stringA = String(a)
// console.log(stringA);
// console.log(typeof stringA);


// ***************Operations****************

let value = 7
let negvalue = -value
// console.log(negvalue);

let str1 = "Hello"
let str2 = " Smriti"
// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");  
// console.log("1" + 2 + 2);  // if there is a string in front, everything will be converted into string
// console.log(1 + 2 + "2");  // if string is at the end, then everything before it will be executed as it is

// console.log( (3 + 5) * 3 % 5);

// console.log(+true);
// console.log(+"");      


score = 100
score++;
console.log(score);
++score + score++;
console.log(score);
