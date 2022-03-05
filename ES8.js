/**
 * ECMAScript 8
*/
console.log("\n ECMAScript 8");



/** OBJECT ENTRIES **/
console.log('\n/** OBJECT ENTRIES **/');
//
const data = {
    front: 'Dan',
    back: 'Aqua',
    design: 'Pepe'
}
const entries = Object.entries(data);
console.log(entries);
console.log(`My lenght = ${entries.length}`);



/** OBJECT VALUES **/
console.log('\n/** OBJECT VALUES **/');
//
const values = Object.values(data);
console.log(values);



/** STRING PADDING **/
console.log('\n/** STRING PADDING **/');
//
const myString = 'hello';
console.log(myString.padStart(7,'hi'));
console.log(myString.padEnd(7,'hi'));



/** ASYNC AWAIT **/
console.log('\n/** ASYNC AWAIT **/');
//
const myPromise = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve('Resolved!'), 3000)
        : reject(new Error('Can not resolve this'));
    })
};
// Forma regular de usar promesas
myPromise().then(response => console.log(response));
//
// Promesas con Async Await
const myAsync = async ()=>{
    const hello = await myPromise();
    console.log(hello);
};
myAsync();
//
// Manejo de errores con Await Async
const anotherAsync = async ()=>{
    try{
        const newPromise = await myPromise();
        console.log(newPromise);
    }
    catch (error){
        console.log(error);
    }
};
anotherAsync();