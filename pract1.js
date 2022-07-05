console.log("hello welcome back!");

// for (let i = 0; i < 90; i++) {
//     console.log(i);

// }
let age = 7;
while (age < 18) {
    console.log("you are underaged!");
    age++;
}

let arr = [2, 3, 4, 5, 6, 7, 8, 90];

arr.forEach(function (element, index, array) {
    console.log(element, index, array)
})

for (let i = 0; i < 10; i++) {
    if (i === 8) {

        continue;
    }
    console.log(i);


}

let object = {
    name: "sohail",
    age: 18,
    profession: "frontend developer",
    os: "windows"
}

for (let one in object) {

    console.log(`my ${one} is ${object[one]}.`);
}