console.log(`Element selectors`);

/* 
element selectors
1. single element selector
2. multi element selectors

*/

let elem = document.getElementById('top');
elem = elem.className;
elem = elem.childNodes;
Array.from(elem).forEach(function(element)
{
    console.log(element);
})
elem = elem.parentNode;
elem.style.border = `50px solid red`;
elem.innerText = `hello sohail`;
elem.innerHTML = `<h1> this is javascript </h1>`
console.log(elem.innerHTML);

let select = document.querySelector(`#top`);
    select = document.querySelector(`.child`);
    select = document.querySelector(`h1`);
    select.style.color = `red`;

console.log(select);

let elements = document.getElementsByClassName(`child`);
     elements = document.getElementsByClassName(`container`);
     elements = document.getElementByTagName(`div`);


// console.log(elements[0].getElementsByClassName(`child`));
console.log(elements);

