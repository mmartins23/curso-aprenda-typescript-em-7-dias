"use strict";
// ReadOnly e Parametro do constructor
class Movies {
    constructor(readonlyid, name, _price) {
        this.readonlyid = readonlyid;
        this.name = name;
        this._price = _price;
    }
}
let movie1 = new Movies(1, 'Spider-Man', 20);
// Index Signature
class HotelRooms {
}
let room = new HotelRooms();
room.A01 = 'Ana';
room.AO2 = 'Charles';
// Inheritance
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Overriding
    get greet() {
        return this.firstName + " " + this.lastName;
    }
}
// Cliente do banco
class Clients extends Person {
    // Overriding
    get greet() {
        return "Dear " + super.greet;
    }
}
class Staff extends Person {
    // Overriding
    get greet() {
        return "Hi " + super.greet;
    }
}
let client1 = new Clients('Andre', "Silva", 30);
let staff1 = new Staff('Bruna', "Martins", 20);
console.log(client1.greet);
console.log(staff1.greet);
