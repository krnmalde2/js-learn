let personName = "Raj"
let age = 25

console.log("person name is " + personName + "and age is " + age); // not used in industry
console.log(`person name is ${personName} and age is ${age}`); // mostly used in industry using backtick - string interpolation

const gameName = new String("Rajhc")

console.log(gameName[0]);
console.log(gameName.__proto__); //used in browser console to get all methods of strings


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf("R"));
console.log(gameName.charAt(0));

