const name = "Matthew";
let age = 20;
const hasHobbies = true;

// Template Literals
console.log(`My name is ${name}!`);


// Regular Way
// function summarizeUser(userName, userAge, userHasHobby) {
//     return (
//         'Name is ' + 
//         userName + 
//         ', age is ' + 
//         userAge + 
//         ' and the user has hobbies: '
//         + userHasHobby
//     );
// };

// As Array Fxn
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: '
        + userHasHobby
    );
};

const add = (a,b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 2 + 2;

console.log(add(1,2));
console.log(addOne(5));
console.log(addRandom());
console.log(summarizeUser(name, age, hasHobbies));