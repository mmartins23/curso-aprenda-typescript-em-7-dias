// Day 3 - Exercise 1

let pi = 3.14159;
let tau = pi * 2;

console.log(`${tau} is ${pi} times two.`)

// Day 3 - Exercise 2
let pie: string;

pie = 'blueberry';

console.log(`I like to eat ${pie}-flavored pie.`)

// Day 3 - Exercise 3
let isDouglas: boolean;
isDouglas = true;

console.log(`${isDouglas ? 'oh! Hi Douglas' : 'Who are you?'}`);

// Day 3 - Exercise 4

const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['apple', 'banana', 'cherry'];
const stringsAndNumbers: (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays:(number | string)[][] = [sequence,animals,stringsAndNumbers];

console.log(allMyArrays);