console.time(`time`);
console.log(`Type conversions`);

let variable;
variable = 55;
console.log(variable, typeof variable);
// string conversion
variable = String(55);
console.log(variable, typeof variable);

variable = String(true);
console.log(variable, typeof variable);

let date = String(new Date());
console.log(date);

let array = String([12, 34, 25, 55]);
console.log(array);
console.log(array.length, typeof array);

let m = 8;
console.log(m.toString(), typeof m);

let s = `3434`;
console.log(s,  typeof s);
s = Number(`3434`);
s = Number(`3434a`);
console.log(s, typeof s);

// parseInt and parseFloat conversions

let number = parseInt(`34343.67`);
console.log(number, typeof number); // convert into int
number = parseFloat(`3`); // convert into float
console.log(number.toFixed(20), typeof number);

// type coercion 
let str = Number(`90`);
let num = 34;
console.log(str + num);
console.timeEnd(`time`);

