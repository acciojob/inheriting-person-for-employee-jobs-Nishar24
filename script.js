// complete this js code
// Person Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee Class (inherits from Person)
class Employee extends Person {
  constructor(name, age, jobTitle) {
    // Call the Person constructor to initialize name and age
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // Method to greet with job title
  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Example Usage
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old.

const employee = new Employee("Bob", 30, "Manager");
employee.greet(); // Output: Hello, my name is Bob, I am 30 years old.
employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.