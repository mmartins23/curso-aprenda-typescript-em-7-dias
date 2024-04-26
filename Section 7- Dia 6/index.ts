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
    constructor(public firstName: string, public lastName: string, public age: number) {}

    greet() {
        console.log(`Hi, I am ${this.firstName}`)
    }
}

// Cliente do banco
class Clients extends Person {
    balance() {
        console.log('Your balance is USD 50');
    }
}