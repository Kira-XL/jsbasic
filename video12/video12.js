let arr = ['Kevin','Mc Carthy', 'Denny', 'Leny'];

// for (let i = 0; i< arr.length; i++){
//     console.log('Top', i+1, arr[i]);
// }

let i = 0;
while(i < arr.length){
    console.log('Top', i+1, arr[i]);
    i ++;
}

// Dung while khi chua biet chinh xac phai lap lai bao nhieu lan, va dieu kien la gi
let flag = false;

while(!flag){ 
    console.log('check value i:', i);
    i++;

    if(i===10) flag = true; 
};