// ReadOnly e Parametro do constructor
class Movies {
    constructor(
        public readonlyid: number,
        public name: string,
        private _price: number) {
    }
}

let movie1 = new Movies(1, 'Spider-Man', 20);


// Index Signature
class HotelRooms {
    [roomNumber: string]: string
}

let room = new HotelRooms();

room.A01 = 'Ana';
room.AO2 = 'Charles';


// Inheritance
class Person {
    constructor(public firstName: string, public lastName: string, public age: number) { }

    // Overriding
    get greet() {
        return this.firstName + " " + this.lastName;
    }
}

// Cliente do banco
class Clients extends Person {
    // Overriding
    override get greet() {
        return "Dear " + super.greet;
    }
}

class Staff extends Person {
    // Overriding
    override get greet() {
        return "Hi " + super.greet;
    }
}

let client1 = new Clients('Andre', "Silva", 30);
let staff1 = new Staff('Bruna', "Martins", 20);

console.log(client1.greet);
console.log(staff1.greet);

