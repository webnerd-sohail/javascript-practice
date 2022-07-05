console.time(`1`);

console.log(`Arrays`);

let marks = [34,55,32,57,67,89,100];
let fruits = [`apple`, `orange`, `banana`];
let mixed = [67,89,100, `orange`, `banana`, [34,5] ];

console.log(marks);
console.log(fruits);
console.log(mixed);
console.log(marks.length);
console.log(marks[3]);
console.log(Array.isArray(marks));
marks[1] =`sohail`;
console.log(`elements are : `,marks);

let value  = marks.indexOf(32);
console.log(value);
marks.push(12);
console.log(marks);
marks.unshift(123);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(2,4); //remove elements from 2 and remove 4 elements
console.log(marks);
marks.reverse()
console.log(marks);
marks = marks.concat(fruits);
console.log(marks);
console.timeEnd(`1`);

// DOM manupulation try
//let Name;
// Name = prompt(`please enter your Name:`)
// html = `<h1>welcome ${Name}</h1>`
// document.body.innerHTML = html;

// object literals

let obj = {
    Name : `Sohail`,
    Channel : `SohailFinearts`,
    marks : [1,2,3,4,5]
}
// html = `<h1>welcome ${obj['Channel']}</h1>`
//  document.body.innerHTML = html;
console.table(obj)