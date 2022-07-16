console.log(`ES06 classes`);

// classes
class Employee {

    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;

    };


    slogan()
    {
        return `Hello I am ${this.name}, I am working at microsoft`;
    };

    joiningYear(){
        return 2022 - this.experience;
    };

    // method that will be indepedent of object
    static add(a,b)
    {
        return a + b;
    }

};

// inheriting employee class in programmer class

class programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision,givenLanguage,githubUserName)
    {
        super(givenName, givenExperience, givenDivision);
        this.language = givenLanguage;
        this.github = githubUserName;

    };

    favouriteLanguage(){
        return this.language;

    };

    static mul(a,b)
    {
        return a * b;
    }
}

let sohail = new Employee(`sohail`, 12 , `production`);
console.log(sohail);
console.log(sohail.slogan());
console.log(sohail.joiningYear());
console.log(Employee.add(23,5));

// inhert employee class in programmer class 

let Yusuf = new programmer(`yusuf`, 1 , `production`, `javacript`, `webnerd_yusuf`);
console.log(Yusuf);
console.log(Yusuf.favouriteLanguage());
console.log(Yusuf.slogan());
console.log(Yusuf.joiningYear());
console.log(programmer.mul(23,5));
