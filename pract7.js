console.log(`hello world`);
let x = 10;
let y = 9;
let z = x / y ;
console.log(z);

// exploring math object
z = Math.PI;
z = Math.E;
z = Math.round(5.4);
z = Math.ceil(5.4);
z = Math.floor(5.8);
z = Math.abs(-5.8);
z = Math.sqrt(5.8);
z = Math.pow(34,34);
z = Math.min(367,34);
z = Math.max(367,34 ,2);
z = Math.random();
z = Math.ceil(1 + (1000-1)*Math.random());

let element = document.createElement('h1');
element.id = `dom`;
let msg = document.createTextNode(`${z}`);
let div = document.querySelector('div.container'); element.appendChild(msg);
div.appendChild(element);

document.getElementById ('dom').addEventListener('click', function(){
        
    console.log(`${z}`);
     })

console.log(z);

