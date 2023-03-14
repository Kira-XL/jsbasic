let arr = ['Makr','Simpson','Calvin','Kenny'];

let i = 0;
// 1. if else
// while(i < arr.length){    
//     //if else
//     if (arr[i].length === 7) {
//         console.log('Top name: ', i + 1, arr[i]);
//     } else if (arr[i].length === 4){
//         console.log('Top name: ', i + 1, arr[i]);
//     }
//     i++;
// }

// 2. break

// while(i < arr.length){    
//     console.log('check i=', i);
//     if (arr[i] === 'Calvin') {
//         console.log('Top name: ', i + 1, arr[i]);
//         break;
//     } 
//     i++;
// }

// 3. continue

while(i < arr.length){
    i++;    
    console.log('check i=', i);
    if (arr[i] === 'Calvin') {
        console.log('Top name: ', i + 1, arr[i]);
        continue;
    } 
   
}