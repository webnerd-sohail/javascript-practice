console.time(`1`);

console.log(`control statements\n`);

/*let age = prompt(`what is your age?`);
if (age >= 18)
{
    alert(`you are eligible`);
}
else
{
    alert(`you are not eligible`);
}
*/

let str = ` sohail`;
if(str.includes(`sohail`))
{
    console.log(str);
}
else{
    
    alert(`false`);
}

let variable;
console.log(typeof variable);

if(typeof variable !== `undefined`)
{
    console.log(`variable is defined`);
}
else
{
    console.log(`variable is not defined`);
}
console.timeEnd(`1`);
