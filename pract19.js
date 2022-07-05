console.time(`1`);

function greet(Name)
{
    console.log(`welcome ${Name}`);
}


function takeName(){

    let Name;
    Name = prompt(`what is your name?`);
    // console.log(`hello ${Name}`);
    return Name;
}

let Return = takeName();
let greeting = greet(Return);

console.timeEnd(`1`);




