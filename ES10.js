/**
 * ECMAScript 10
*/
console.log("\n ECMAScript 10");



/** ARRAY FLAT **/
console.log('\n/** ARRAY FLAT **/');
//
let myArray = [1,2,3, [1,2,3, [1,2,3]]];
//
console.log(myArray.flat(2));
//
let newArray = [2,4,6,8];
//
console.log(newArray.flatMap(value => [value, value*3]));



/** TRIM STRINGS **/
console.log('\n/** TRIM STRINGS **/');
//
let myName = '       Daniel Zaleta      ';
console.log(myName);
console.log(myName.trimStart());
console.log(myName.trimEnd());



/** OPTIONAL CATCH BINDING **/
console.log('\n/** OPTIONAL CATCH BINDING **/');
//
// Before ES10
try {
    
} catch (error) {
    error
}
//
// With ES10
try {
    
} catch {
    error
}



/** FROM ENTRIES **/
console.log('\n/** FROM ENTRIES **/');
//
let myEntries = [
    ['name', 'Dan'],
    ['age', 23]
];
//
console.log(Object.fromEntries(myEntries));



/** OBJETO TIPO SIMBOLO **/
console.log('\n/** OBJETO TIPO SIMBOLO **/');
//
let textSymbol = `This is a symbol`;
let mySymbol = Symbol(textSymbol);
console.log(mySymbol.description);