console.log(`Dom parents and child`);
// let html = `<h1> hello world</h1>`;
// let element = document.getElementById(`top`);
// element.innerHTML = html;

let cont = document.querySelector(`.container`);
// console.log(cont.childNodes);
// elem = cont.children
// Array.from(elem).forEach(function(element) {

//     console.log(element);
// })

let nodeName = cont.childNodes[0].nodeName;
let nodeType = cont.childNodes[0].nodeType;

console.log(nodeName);
console.log(nodeType);

// nodeTypes = 
// 1. element
// 2. attribute
/* 3. text node
    8. comment 
    9. document
    10. doctype
*/


console.log(cont.childElementCount);
console.log(cont.parentNode);
console.log(cont.nextSibling);
console.log(cont.nextElement Sibling);

