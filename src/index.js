import { Test } from './server';

let test = new Test();

console.log(Array(80).join('='));
console.log(test.testFoo());
console.log(Array(80).join('-'));
