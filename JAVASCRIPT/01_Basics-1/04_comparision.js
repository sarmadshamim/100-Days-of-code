// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); //coerce string to number which is 2>1, true
console.log("02" > 1); //coerce string to number which is 2>1, true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true, when we use (>=) this operator js coerce the null value which is 0 so 0>=0 which is true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// ===

console.log("2" === 2); //check value and type both
