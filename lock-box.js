const prompt = require('prompt-sync')({sigint: true});

let pinCode = '1234';

let user = prompt("Enter the correct password: ");
console.log(user);

if(user === '1234'){
    console.log("success!");
    
} else{
    console.log("failure");
}
