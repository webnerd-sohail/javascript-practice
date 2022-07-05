console.log(`local storage and session storage`);

localStorage.setItem('Name', 'Sohail');
localStorage.setItem('Name-1', 'yusuf');

let Name = localStorage.getItem('Name');
    Name = localStorage.getItem('nothing');
    Name = localStorage.removeItem('Name');
    Name = localStorage.removeItem( 'Name-1');

    // local storage keep arrays and objects as string
    // to avoid this we will use JSON.stringfy - take object and return string

    
    // first we created one array
    let array = [`sohail`, `Yusuf` , `Anas` , `Aqeeb`];
    // localStorage.setItem('items',  array); in this format, the ls will store the elements in the form of string such as
    // output - `sohail`, `Yusuf` , `Anas` , `Aqeeb`
    //to avoid this and take whole array inside storage to update its contain later when we retrived it by using JSON.stringfy - take object and return string that means it will store the whole array as string i.e. ` [`sohail`, `Yusuf` , `Anas` , `Aqeeb`];`
    localStorage.setItem('items',  JSON.stringify(array));
    //to retrive the array from local storage to add one more element `hardik` in it we will use the following code

let ls = localStorage.getItem(`items`); // its output will give the array as string to reconvert it to array we will use JSON.parse() - take string and return object
list = JSON.parse(ls);
console.log(list); // here the list will showed as in the typeof object now its array and we can push `hardik` in it
list.push(`hardik`);
let str = JSON.stringify(list); // now to store the array again in the ls, we have to repeat the conversion
console.log(str);
localStorage.setItem('new-1', str ); 
localStorage.removeItem(`new-2`);
// localStorage.clear();



