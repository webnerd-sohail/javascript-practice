console.log(`hello`);

// single element selector
// let a = document.getElementById("three");
// element = a.className;
// element = a.childNodes;
// element = a.parentNode;
// a.style.color = "green";
// a.innerText = "sohail"
// a.innerHTML = " <h1>sohail</h1>"
// console.log(a);
//queery selector

// let a = document.querySelector('.child');
//  a = document.querySelector('#two');
// a = document.querySelector('div');
// a.style.color = "white"

// console.log(a);


// multiple element selector
let a = document.getElementsByClassName('child');
// a = document.getElementsByTagName('div')
Array.from(a).forEach(element => {
    console.log(element);
    element.style.border = '5px solid yellow';
    element.style.color = 'red';

});
