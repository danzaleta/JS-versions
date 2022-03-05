/**
 * ECMAScript 6 
*/
console.log("\n ECMAScript 6");



/** DEFAULT PARAMS **/
console.log('\n/** DEFAULT PARAMS **/');
//
// Before ES6
function bES6(name, age, country) {
    var name = name || 'dan';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name, age, country);
}
bES6();
//
// After ES6
function ES6(name = 'Yomero', age = 20, country = 'MX'){
    console.log(name, age, country);
}
ES6(); 



/** CONCATENACION **/
console.log('\n/** CONCATENACION **/');
//
let hello = "Hola";
let world = "Mama";
//
// Before ES6
console.log(hello + ' ' + world);  
//
// After ES6
console.log(`${hello} ${world}`);



/** MULTILINEA **/
console.log('\n/** MULTILINEA **/');
//
// Before ES6
let lorem_bES6 = 'Frase con diccion antes de ES6. \n' + 'Aqui va el otro renglon';
console.log(lorem_bES6);
//
// After ES6
let lorem_ES6 =
`Frase con diccion de ES6.
Este es el otro renglon`;
console.log(lorem_ES6);



/** DESETRUCTURACION **/
console.log('\n/** DESETRUCTURACION **/');
//
// Before ES6
let person = {
    'name': 'dan',
    'age': 23,
    'country': 'MX'
}
console.log(person.name, person.age, person.country);
//
// After ES6
let {name, age, country} = person;
console.log(name, age, country);



/** SPREAD OPERATOR (OPERADOR DE PROPAGACION) **/
console.log('\n/** SPREAD OPERATOR (OPERADOR DE PROPAGACION) **/');
//
let team1 = ['Pepe', 'Wicho', 'Toro'];
let team2 = ['Botas', 'Chuky', 'Ruperto'];
let team3 = ['Jojo', ...team1, ...team2];
console.log(team3);



/** SCOPE VAR / LET **/
console.log('\n/** SCOPE VAR / LET **/');
//
{
    var globalScope = 'is a VAR';
}
console.log(globalScope);
//
{
    let localScope = 'is a LET'
    console.log(localScope);
}



/** CONST **/
console.log('\n/** CONST **/');
//
{
    const myConst = 'a'; // No cambia y siempre debe declararse en inicializacion
    console.log(myConst);
}



/** PARAMETROS EN OBJETOS **/
console.log('\n/** PARAMETROS EN OBJETOS **/');
//
let name = 'dan';
let age = 23;
//
// Before ES6
obj = {name:name, age:age};
console.log(obj);
//
// After ES6
objES6 = {name, age};
console.log(objES6);



/** ARROW FUNCTIONS **/
console.log('\n/** ARROW FUNCTIONS **/');
//
const names = [
    {name:'dan', age:23},
    {name:'don', age:32}
];
//
// Before ES6
let listOfNames = names.map(function(item){console.log(item.name);});
//
// After ES6
let listOfNamesES6 = names.map(item => console.log(item.name));
//
// Mas formas de escribir arrow funtions
/*
const myArrow1 = (param1, param2, param3) => {
    // ... code
}
const myArrow2 = param1 => {
    // ... code
}
const myArrow3 = param1 => param1 * param1;
const myArrow = () => {
    // ... code
}
*/



/** PROMESAS **/
console.log('\n/** PROMESAS **/');
//
const myPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('It works!!');
        }else{
            reject("Doesn't work");
        }
    });
};

myPromise()
.then(response => console.log(response))
.catch(error => console.log(error))



/** CLASES **/
console.log('\n/** CLASES **/');
//
class Calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }

}
//
const calc = new Calculator();
console.log(calc.sum(5,5));



/** MODULOS **/
console.log('\n/** MODULOS **/');
//
// Nueva sintaxis/
/*
import {newSintax} from "./modules/new-module";
newSintax();
*/
//
// Anterior sintaxis
const oldSintax  = require('./modules/es6-module');
console.log(oldSintax());



/** GENERADORES **/
console.log('\n/** GENERADORES **/');
//
function* newGenerator() {
    if (true) {
        yield 'First state';
    }
    if (true) {
        yield 'Second state';
    }
}
//
const myGenerator = newGenerator();
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);