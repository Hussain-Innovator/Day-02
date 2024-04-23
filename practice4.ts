// Define an object type representing a Person
type Person = {
    name: string;
    age: number;
    email?: string;
};
// Create an object of type Person
const person1: Person = {
    name: "Attaullah",
    age: 37,
    email: "attaullah@example.com"
};

const person2: Person = {
    name: "Hassan",
    age: 29
};
// Access properties of person1
console.log(person1.name); 
console.log(person1.age); 
console.log(person1.email); 

// Access properties of person2
console.log(person2.name); 
console.log(person2.age); 
console.log(person2.email);
