// Day 5 - Exercise 1
interface cartItem {
    id: number,
    title: string,
    variantId?: number;
}
function addToCart(item:cartItem ) {
    console.log(`Adding "${item.title}" to cart.`);
  }

  addToCart({id: 1, title: 'shoes'});


// Day 5 - Exercise 2
interface IPerson  {
    name: string;
    age: number;
}

class Person implements IPerson {
    constructor(public name: string, public age: number) {}
  }

  const jane = new Person('Jane', 31);

  console.log(`${jane.name} is ${jane.age} years old.`);

// Day 5 - Exercise 3

class MC {
    greet(event:string = 'party'):string {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log(mc.greet('show'));

// Day 5 - Exercise 4

class Employee {
    constructor(public title: string, public salary: number) {
    }
  }

  const employee = new Employee('Engineer', 100000);

  console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);

  // Day 5 - Exercise 5

interface UserSchema {
    id: number
    name: string
}

class User implements UserSchema {
    constructor(public name: string, readonly id: number) {}
}

const user = new User('Dog', 1)

console.log(user.id)

user.name = 'Harold' // pode mudar
// user.id = 5 // nao pode mudar

console.log(`User:`, user)