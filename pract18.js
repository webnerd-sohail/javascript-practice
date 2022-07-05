console.time(`1`);
console.log(`loops`);
//for,  while, do-while

// for (let i = 0; i <  100; i++)
//  {
    
//     console.log(i);
//     if(i==35)
//     {
//         i++;
//         continue;
//     }
// }

// let j = 0;
// while(j<100)
// {
//     console.log(j);
//     j++;
// }

// let k = 0;

// do{
//     console.log(k);
//     k++;

// }while(k<101);

let array = [12,3,4,22,3,11,2];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}

array.forEach(function(element, index, array){
    console.log(`the index of ${element} is ${index} from ${array}`);
})


let object = {
    Name : `sohail`,
    Channel : `Sohailfinearts`,
    Age : 19,

};

for( let key in object)
{
    console.log(key, object[key]);
    console.log(`the ${key} is ${object[key]}` );
}

console.timeEnd(`1`);
