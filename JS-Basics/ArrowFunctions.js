//Arrow function with two arguments
const sum = (firstParam, secondParam) => { return firstParam + secondParam; };
console.log(sum(2,5));

//Arrow function with no arguments
const printHello = () => {
    console.log('hello');
};

printHello(); //logs 'hello' in console

// Arrow function with a single argument
const checkWeight = weight => { 
    console.log(`Baggage weight : ${weight} kilograms`);
};
checkWeight(25); //Logs 'Baggage weight : 25 kilograms.' in console

//consice arrow functions
const multiply = (a, b) => a * b ; 
console.log(multiply(2, 30)); // logs 60 in console