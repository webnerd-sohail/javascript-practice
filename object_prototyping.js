console.log(`object prototyping`);

let object = {
    Name : `sohail`,
    age : 19
}

console.log(object);

function getName(Name) {
    this.name = Name;

}

getName.prototype.setName = function(Name) {
     this.name = Name;
}
let obj = new getName(`Aqeeb`);

console.log(obj);
console.log(obj.name);
console.log(obj.setName(`sohail`));
console.log(obj);
console.log(obj.name);

