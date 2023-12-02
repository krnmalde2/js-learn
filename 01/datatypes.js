"use strict"; // these line tell compiler to use new version of javascript

/*primitive datatypes
String,number,boolean,symbol,bigint,undefined,null
*/
/*
Refrence type or non primitive type
object,array,function
*/

//alert(9+3) alert will not work in node it will work on browser console

console.log(3
    + 3); // code readibility should be high


let name = "Raj"
let age = 45
let isLoggedIn = true
let state;
let temprature = null

/*
number range = 2 power of 53
bigint
string = ""
boolean = true/false
null = standlone value not 0 it means empty
undefined = 
symbol = unique
*/

//object

console.log(typeof(state))
console.log(typeof temprature )

console.log("--------------------------------------");

// stack memory and heap memory
console.log("Stack memory -> store primtive data type -> provides only copy of variable")
console.log("heap memory -> store non-primtive data type -> provides refrence to original variable")

let stringName = "stack memeory original"
let anotherString = stringName
anotherString = "stack memory copy"

console.log(stringName);
console.log(anotherString);

console.log("Heap Example");

const personOne = 
{
    name : "Raj",
    gender : "Male"
}

const personTwo = personOne;

personTwo.gender = "female"

console.log(personOne);
console.log(personTwo);

