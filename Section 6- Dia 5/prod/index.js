"use strict";
class Users {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
}
// Creating users
const user1 = new Users('Alice', 10);
const user2 = new Users('Bob', 5);
console.log(user1, user2);
