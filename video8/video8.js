console.log('Hello World from js');

let obj = {
    name: 'Hoang',
    address: 'Ho Chi Minh',
    a: function(){
        console.log('Hello world from inside function inside Obj');
        return '';
    }
};
let b = 5;
let c = 'name';
obj[c] = 'KEVIN';


console.log(`type of a: ${typeof obj} , type of b: ${typeof b}`);

console.log(`What is your name?
My name is: ${obj.name}`); 

console.log(`Where is your from?
I'm from: ${obj.address}`); 

console.log(`What is your name? 
My name is: ${obj['name']}`); //other way

console.log(`Where is your from?
I'm from: ${obj['address']}`); //other way

console.log(obj.a());