/**
 * ECMAScript 2020
*/
console.log("\n ECMAScript 2020");



/** DYNAMIC IMPORT **/
console.log('\n/** DYNAMIC IMPORT **/');
//
const myButton = document.getElementById("btn");
myButton.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.example();
});



/** BIG INT **/
console.log('\n/** BIG INT **/');
//
const bigNumber1 = 9007199254740991n;
const bigNumber2 = BigInt(9007199254740991);
console.log(bigNumber1);
console.log(bigNumber2);



/** PROMISE ALL SETTLED **/
console.log('\n/** PROMISE ALL SETTLED **/');
//
const promise1 = new Promise((resolve, reject)=> reject("Rejected!"));
const promise2 = new Promise((resolve, reject)=> resolve("Resolved!"));
const promise3 = new Promise((resolve, reject)=> resolve("This one too!!"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));



/** GLOBAL THIS **/
console.log('\n/** GLOBAL THIS **/');
//
console.log(window);
console.log(globalThis);



/** NULL OPERATOR **/
console.log('\n/** NULL OPERATOR **/');
//
const fooo = null ?? 'is null value';
console.log(fooo);
//
const fooo1 = 2 ?? 'is null value';
console.log(fooo1);



/** OPTIONAL CHAINING **/
console.log('\n/** OPTIONAL CHAINING **/');
//
const user = {};
if(user?.profile?.email){
    console.log('Email founded!')
}else{
    console.log('Failed');
}
