class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log('What is for dinner?');
  }

  speak() {
    console.log(`My name if ${this.name}, i am ${this.age} years`)
  }
}

// Extends Person and super is used to reference a superclass properties
// The extends keyword enables the subclass to benefit from inheritance
class Chef extends Person {
  occupation: string;

  constructor(name: string, age: number, occupation: string) {
    super(name, age);
    this.occupation = occupation;
  }

  speak(): void {
    console.log(`I am a ${this.occupation}`);
  }

  cook() {
    console.log('I am cooking');
  }
}

// An interface is a Typescript structure that acts as a contract by enforcing a particular shape on a class or a specific type
class Human {
  name: string;
  gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }

  speak() {
    return 'I am speaking';
  }
}

class Doctor implements Human {
  name: string;
  gender: string;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }

  speak(): string {
    return 'I am doctor'
  }
}