console.log(`local & session storage`);
// local storage
//set item
// localStorage.setItem(`Name`, `Hardik`);
// localStorage.setItem(`Name2`, `Sohail`);
// localStorage.setItem(`Name3`, `Yusuf`);
// localStorage.setItem(`Name4`, `Tanim`);
// //get item from localstorage

// let getName = localStorage.getItem(`Array1`);
// // localStorage.removeItem(`Name`); 
// console.log(getName);

// let Array = [`one`, `two`, `three`, `four`, `five`, `six`, `seven`];
// localStorage.setItem(`Array1` ,  JSON.stringify(Array));


sessionStorage.setItem(`Name`, `Name`);
sessionStorage.setItem(`Name2`, `Sohail`);
sessionStorage.setItem(`Name3`, `Yusuf`);
sessionStorage.setItem(`Name4`, `Tanim`);
//get item from localstorage

let getName = sessionStorage.getItem(`Name2`);
// localStorage.removeItem(`Name`); 
console.log(getName);

