const person = {
    name: 'Matthew',
    age: 20,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// const printName = (personData) => {
//     console.log(personData.name);
// }

// DESTRUCTURING
const printName = ({ name }) => {
    console.log(name);
}

printName(person);


const { name, age } = person;
console.log(name, age);

