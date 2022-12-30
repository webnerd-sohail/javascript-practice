console.log(`string functions`);

let firstName = `sohail`;
let lastName = `shaikh`;
let sentence = `hey there I am sohail`

console.log(firstName + ` `+lastName)//concatanation
console.log(firstName.concat(` and taslim`))

lowerCase = firstName.toUpperCase();
console.log(lowerCase);
console.log(lowerCase.toLowerCase());
console.log(firstName.indexOf(`h`));
console.log(firstName.lastIndexOf(`s`));
console.log(firstName.replace(`sohail`, `Taslim`));
console.log(firstName.includes(`l`));
console.log(firstName.endsWith(`l`));
console.log(sentence.split(` `));
console.log(sentence.slice(0,10))

//template literals

let myHtml = `
<h1> hey there I am ${firstName} ${lastName}</h1>`

document.body.innerHTML = myHtml;


