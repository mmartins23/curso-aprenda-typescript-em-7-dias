"use strict";
// Type Alias
// type Users = {
//     name: string;
//     age: number
// }
// const user: Users = {
//     name: 'John',
//     age: 20
// }
// Union Types
function combinesValues(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combinesValues(5, 4));
console.log(combinesValues('Apple', 'Banana'));
