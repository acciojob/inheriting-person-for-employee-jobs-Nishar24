// complete this js code
// Person Class
class Person {
    constructor(name, age) {
        this.name = Alice;
        this.age = 25;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Employee Class (Inheriting from Person)
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(Bob, 30);
        this.jobTitle = Manager;
    }
    
    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}
