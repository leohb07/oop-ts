class PersonTwo {
  name: string;
  age: number;
}

class Motor {
  make: string;
  model: string;
  color: string;
}

// create a new instance
const motor: Motor = new Motor();
const person2: PersonTwo = new PersonTwo();

// Property 'age' does not exist on type 'Motor'
motor.age()