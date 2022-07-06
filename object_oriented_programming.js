console.log(`object oriented programming`);

let car = {
    Name : `rolls royce`,
    topSpeed : 120,
    run : function () {
        console.log(`car is running`);
    }
}

console.log(car);
console.log(car.run());
console.log(car.Name);
console.log(car.topSpeed);

// constructors
// new Date()

// creating onstructor for car
function generalCar(carName, carSpeed){
    this.name = carName;
    this.speed = carSpeed;
    this.run = function(){
        console.log(`${this.name} is running!`);

    }
    this.compare = function(){
        console.log(`this car is slower by ${300 - this.speed} than mercedes`);
    }
}

let car1 = new generalCar(`Bugatti`, 200);
let car2 = new generalCar(`rolls royce`, 190);

console.log(car1);
console.log(car1.name);
console.log(car1.speed);
console.log(car1.run());
console.log(car1.compare());

console.log(car2);
console.log(car2.name);
console.log(car2.speed);
console.log(car2.run());
console.log(car2.compare());
