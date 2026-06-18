console.log("2" > 1);     // true because string is converted to number

console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);
// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log("2" === 2);   // false because === checks for both value and type
// === is strict equality operator, it checks for both value and type.
