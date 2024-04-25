"use strict";
class Users {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    addMoney(amount) {
        this.balance += amount;
    }
}
// Creating users
const user1 = new Users('Alice', 10);
const user2 = new Users('Bob', 5);
console.log(user1, user2);
// method
user1.addMoney(100);
user2.addMoney(5);
console.log(user1, user2);
