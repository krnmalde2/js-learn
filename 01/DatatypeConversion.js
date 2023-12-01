let Score = "Raj";
let score = "kumar"
console.log(Score);
console.log(score);
console.log(typeof Score);

let stringtonum = Number(Score);
console.log(typeof stringtonum);
console.log(stringtonum);

console.log("------------------------------------");
let RealScore = "22"
console.log(typeof RealScore);
let convertScore = Number(RealScore)
console.log(typeof convertScore);
console.log(convertScore);

console.log("----------------------------------");
let Dummyscore = "22abc"
console.log(typeof Dummyscore);

let DummyscoretoNumber = Number(Dummyscore)
console.log(DummyscoretoNumber);
console.log(typeof DummyscoretoNumber);

console.log("--------------------------------------");
/*
"22" = 22
"22abc" = NaN
true = 1
false = 0

*/

let isLoggedIn = "Raj"
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let stringtoBoolean = Boolean(isLoggedIn)
console.log(stringtoBoolean);
console.log(typeof stringtoBoolean);

/*
1 = true 0 = false
"" = false
"Raj" = true"
*/

console.log("----------------------------");
let number1 = 33
console.log(number1);
console.log(typeof number1);

let num2string = String(number1)
console.log(num2string);
console.log(typeof num2string);

console.log("------------------------------");

let name1 = "hello"
let name2 = " hitesh"

let fullName = name1 + name2
console.log(fullName);

console.log(3 + 3); //add both number
console.log("3" + 3); // if first is string then 33
console.log(3 + "3");
console.log(3 + 3 + "3"); // if first is number then 63
console.log("3" + 3 + 3); // if first is string then 333
console.log(("3" + 3) + ( 3 + 3)); //output 336

console.log((5 * 3) + 2 / 4);


console.log(+true);
console.log(+"");



// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


console.log("---------------------- increment operator");

let num1 = 4
console.log(num1);
const num2 = num1++
console.log(num2);

console.log(num1);
console.log(num2);

console.log(`num1:${num1}, num2:${num2}`);



let num3 = 4
console.log(num1);
const num4 = ++num3
console.log(num4);




let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

















