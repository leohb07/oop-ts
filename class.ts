// Class

class Car {
  model: string;
  year: number;
  price: string;

  drive() {
    console.log('The Car has started driving');
  }

  stop() {
    console.log('The car has stopped');
  }
}

const tesla = new Car();

tesla.model = "Model X";
tesla.year = 2024;
tesla.price = '$100,990'
tesla.drive();
tesla.stop();