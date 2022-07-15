console.log(`hello world`);

// creating object
// const proto = {

//     slogan : function(){
//         return `This company is the best`;
//     },
    
//     changeName : function(newName){
//         this.name = newName;
//     }
// };

// // creating an object from uper wala object
// const myObj = Object.create(proto);
// myObj.name = `sohail`;
// myObj.changeName(`sohail shaikh`);
// myObj.role = `programmer`;

// console.log(myObj);
// console.log(myObj.slogan());

// exercise : create an object named `food` and inherit it in object named `cake`

function employee(Name, salary, experience){
this.myName = Name;
this.mysalary = salary;
this.myExperience = experience;
}

employee.prototype.slogan = function(){
    return `good company - ${this.myName}`;
}

let sohail = new employee(`sohail`, 250000 , 3);
console.log(sohail);
console.log(sohail.myName,sohail.mysalary, sohail.myExperience);

function programmer(Name, salary, experience, language
    ){
        employee.call(this, Name, salary, experience);//inheriting employee in programmer
        this.language = language;
    };

    programmer.prototype = Object.create(employee.prototype)//inherting prototype from employee
    programmer.prototype.constructor = programmer; //inheriting the constructor
    let yusuf = new programmer(`yusuf`, 250000 , 1 , `java`);
    console.log(yusuf);



