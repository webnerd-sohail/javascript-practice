console.log("functions and scope");

function add(a, b) {
    return (a + b);
}

function greet(name) {
    msg = `hello ${name}. how are you? welcome back to coding...!!!`

    return msg;
}

console.log(add(2, 3));
name1 = "sohail shaikh";
// greet(name1);
console.log(greet(name1));