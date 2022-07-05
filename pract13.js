console.time(`your code took`);
console.log(`datatypes`);
let String = `this is string`;
let number = 23.8;
let boolean = true;
let Null = null;
let Undefined ;

console.log(typeof String);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof Null);
console.log(typeof Undefined);

console.log(String);
console.log(number);
console.log(boolean);
console.log(Null);
console.log(Undefined);

//reference datatypes
// Arrays

let myArray = [55, `sohail`, false, ];
console.log(myArray + (typeof myArray))

console.timeEnd(`your code took`);

// object literals

let marks ;
marks = {
    sohail : 89,
    yusuf : 79,
    anas : 35
}

console.log(marks);
console.table(marks);

//functions

function findName()
{
console.log(`name`);
}
findName();
console.log( typeof findName);
