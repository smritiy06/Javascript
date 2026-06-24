let name2 = "Smriti"
let repoCount = 5

// console.log(`My name is ${name2} and my repo count is ${repoCount}`);

const gameName = new String('Smriti-y-com')
console.log(gameName[2]);
console.log(gameName.length);        // length of string
console.log(gameName.toUpperCase());       
console.log(gameName.toLowerCase());       
console.log(gameName.charAt(3));       
console.log(gameName.indexOf('t'));     

let newString = gameName.substring(0,4)       
console.log(newString);

let anotherString = gameName.slice(-8,4)       
console.log(anotherString);       

let string1 = "       smriti        "
console.log(string1);
console.log(string1.trim());


let url = "https://smriti.com/lucky%20yadav"
console.log(url.replace('%20', '-'));

console.log(url.includes("smriti"));

console.log(gameName.split('-'));
