"use strict";
// // Tipo Any
// let price = 40;
// let item = 'Apple';
// let inStore = true;
// let value;
// value = 10;
// Tipo Array
// let numbers: number[] = [10, 20, 30, 40];
// Tipo Tuples
// let item: [string, number, boolean] = ['Apple', 3, true];
// Tipo Enum
var Role;
(function (Role) {
    Role[Role["student"] = 1] = "student";
    Role[Role["teacher"] = 2] = "teacher";
    Role[Role["director"] = 3] = "director";
})(Role || (Role = {}));
const user = {
    name: 'John',
    age: 21,
    role: Role.student
};
