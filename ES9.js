/**
 * ECMAScript 9 
*/
console.log("\n ECMAScript 9");



/** OPERADOR DE REPOSO **/
console.log('\n/** OPERADOR DE REPOSO **/');
//
const obj = {
    name: 'Dan',
    age: 23,
    country: 'MX'
};
//
let {name, ...all} = obj;
console.log(name, all);
//
const obj1 = {
    ...obj,
    country: 'USA',
    gender: 'M'
}
console.log(obj1);



/** PROMISE FINALLY **/
console.log('\n/** PROMISE FINALLY **/');
//
const myPromise = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve('Resolved!'), 3000)
        : reject(new Error('Cannot resolve this'));
    });
};
//
myPromise()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=> console.log('Finally!!'))



/** MEJORAS EN REGEX **/
console.log('\n/** MEJORAS EN REGEX **/');
//
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
//
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
