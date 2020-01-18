
// Objects
const person = {
    name: 'Matthew',
    age: 20,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};


// console.log(person);
// person.greet();


// Arrays
const hobbies = ['Sports', 'Cooking'];  // Reference type! Reason why you can push even though it is a const

// Array Destructuring:
const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// Iteration
// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// Map
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// hobbies.push('Programming');
// console.log(hobbies);

// const copiedArray = hobbies.slice(); // No args, copy whole array
// const copiedArray = [hobbies]; // Inner array
const copiedArray = [...hobbies]; // SPREAD Operator to Copy. Items are pulled out of old array.

console.log(copiedArray);

// REST Operator
// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4));
