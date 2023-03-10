let a = 5;
let b = '5';

console.log('a =', a, 'b =', b,'compare a == b: ', a==b);
console.log('a =', a, 'b =', b,'compare a === b: ', a===b);
console.log(`a = ${a}, b =${b}, compare a === b: ${a===b}`)

// === type, value {So sanh type truoc roi den value}
// ==  value {chi so sanh value va chi so sanh string/int}

let c = ''; // empty
let c1 = {}; // empty
let c2 = [];  // empty

console.log('check value:', c, c1, c2);

let d;
d = 5;
d = [1, 100, 'Kevin'];
console.log('check value:', d);

let e; //undefined
console.log('check value:', e);

// Tong ket: Null va Empty khong quan trong o Frontend, nhung quan trong o backend