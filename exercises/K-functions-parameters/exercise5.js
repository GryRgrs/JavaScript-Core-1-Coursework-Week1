const createOpening = (name) => `Hello, my name is ${name}`;

const createLongGreeting = (name, age) => {
const opening = createOpening(name);
const closing = `, and I am ${age} years old.`;
return `${opening} ${closing}`;
};

const greeting = createLongGreeting("Daniel", 30);
console.log(greeting);
