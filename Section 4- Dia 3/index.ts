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
// function combinesValues(input1: string | number, input2: string | number) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

// console.log(combinesValues(5,4));
// console.log(combinesValues('Apple', 'Banana'));


// Literal type
// let productPrice: 10 | 20 | 30;
// let productSize: 'S' | 'M' | 'L';

// productPrice = 10;
// //productPrice = 5;

// productSize = 'M';
// // productSize = 'XL';

// Intersection type

type User = {
    firstName: string;
    age: number;
}

type JobRole = {
    id: number;
    role: string;
}

type employee = User & JobRole;

const e1: employee  = {
    firstName: 'John',
    age: 20,
    id: 1,
    role: 'student',
}

console.log(e1);