/**
 * ECMAScript 2021
*/
console.log("\n ECMAScript 2021");



/** REPLACE ALL **/
console.log('\n/** REPLACE ALL **/');
//
const myString = "Aprendiendo Javascript, Javascript es la onda";
const replacedString = myString.replace("Javascript", "Popo");
const replacedString2 = myString.replaceAll("Javascript", "Popo");
console.log(replacedString);
console.log(replacedString2);



/** PRIVATE METHODS **/
console.log('\n/** PRIVATE METHODS **/');
//
class Message{
    #show(val){
        console.log(val);
    };
}
const message = new Message();
message.show(3);



/** PROMISE ANY **/
console.log('\n/** PROMISE ANY **/');
//
const promise1 = new Promise((resolve, reject)=> reject("Rejected!"));
const promise2 = new Promise((resolve, reject)=> resolve("Resolved!"));
const promise3 = new Promise((resolve, reject)=> resolve("This one too!!"));
//
Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));



/** WEAK REF **/
console.log('\n/** WEAK REF **/');
//
class AnyClass{
    constructor(element){
        this.ref = new WeakRef(element)
    }
}



/** NUEVOS OPERADORES LOGICOS **/
console.log('\n/** NUEVOS OPERADORES LOGICOS **/');
//
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
//
let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);
//
let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);