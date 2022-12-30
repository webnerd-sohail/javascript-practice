console.log(`conditional and control statements`)

const str = `yes`;
/*
for (let index = 0; index < 2; index++) {
    Name = prompt(`Are you student?`);
    answer = Name.toLowerCase();
    console.log(answer)
    if(answer === str) //`===` check the datatype as well as the value...!!!
    {
        alert(`padhai likhayi karo, IAS YAS bano aur desh ko sambhalo..!!!`);
    }
    else if(answer === `no`)
    {
        alert(`kaam pe jaa bhai, kaam pe jaa`);
    }
    else{
        alert(`yes or No likh naa!`);
    }
}
    
*/
console.time();
console.log(`lets do a mystery series in javascript..!!`);

let k =0;
k = prompt(`enter number`);

console.log(k);
let array = [parseInt(k)];
while(k!=1 && k!=0)
{
    
    if(k%2==0)
    {
        k = k/2;
        console.log(k);
        array.push(k);
        console.log(array);
        
    }
    else if(k%2!=0)
    {
        k = 3*k+1;
        console.log(k);
        array.push(k);
        console.log(array);
        
    }else if(k===1)
    {
        break;
    }
    
}

console.log(`Final Array is `,array,`and total numbers of element in the array is `, array.length );
array.forEach(function(elem, index){
    console.log(elem,`=`, index);
})
console.timeEnd();



let myObj = {
    Name : `sohail`,
    Age : 19,
    profession : `Web developer`
};

for(let keys in myObj)
{
    console.log(`the ${keys} of object is ${myObj[keys]}`);
}