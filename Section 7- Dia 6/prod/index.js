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
    greet() {
        console.log(`Hi, I am ${this.firstName}`);
    }
}
// Cliente do banco
class Clients extends Person {
    balance() {
        console.log('Your balance is USD 50');
    }
}
