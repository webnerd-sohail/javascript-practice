console.time(`your code took`);

console.log(`hello world`);
//variables in javascript
//keyword - var , let , const.
var Name = 'sohail';

var channel;
channel = 'sohailfinearts';

var age = 19;

console.log(Name, channel, age);

//difference between var and let const in

const myName = 'Sohail shaikh';
//myName = 'ujma shaikh'; // you cannot change the value of const here
console.log(myName);

// var is global scope and let is block level scope i.e. local scope

{
    // u cannot play with let outside any  block.
    let Name = `yusuf`;
    Name = `Anas`;
    console.log(Name);
}
console.log(Name);

const array = [1,2,3,4,5,6];
array.push(56);
console.log(array);
// this means you can change the array element but u cannot create a new one.

console.timeEnd(`your code took`);