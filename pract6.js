console.log("working!!");
// creating element
// adding class to element
let obj = document.createElement('li');
obj.className = 'list-items';
// adding id to element
obj.id = 'list-1';
obj.setAttribute('target', '_blank'); 

let ul = document.querySelector('ul.list');
let text = document.createTextNode('this is text node utilisation');
obj.appendChild(text);
// obj.innerText = "dynamically typed list items";
// obj.innerHTML = '<strong>is it bold? yes it is!!!</strong>'
ul.appendChild(obj);

// replacing element
// let elem2 = document.createElement('h3');
// elem2.id = 'elem2';
// elem2.className = 'elem2';
// let tnode = document.createTextNode('this is created textNode');
// elem2.appendChild(tnode);
// obj.replacewith(elem2);
obj.removeAttribute('id');
let a = obj.hasAttribute('class');
obj.setAttribute('id', 'list-1');


console.log(obj);
console.log(a);

// quick quiz
// create a element with text as 'go to code with harry' and create a tag ooutside it with href = 'codewithharry.com'

let element = document.createElement('h1');
let element2 = document.createElement('a');
let msg = document.createTextNode('go to code with  harry');
let div = document.querySelector('div.child2');
element.appendChild(msg);
div.appendChild(element);
let msg1 = document.createTextNode('click here now');
let div2 = document.querySelector('div.child2');
element2.appendChild(msg1);
div2.appendChild(element2);
element2.setAttribute('href','https://www.codewithharry.com/');

console.log(element);
console.log(element2);

let b = prompt('did you done with mini project?');
console.log(b);

if(b===`no`){

    alert(`karo fir, kiski rah dekh rahe ho`);
}
if(b===`yes`){

    alert(`jhut bol raha hain`);
}