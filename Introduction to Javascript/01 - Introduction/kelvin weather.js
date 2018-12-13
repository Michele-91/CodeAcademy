
//Kelvin degrees
const kelvin = 293;
//converts Kelvin degrees into celsius degrees
const celsius = kelvin - 273;
//converts celsius into fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//math.floor rounds fahrenheit to an integer number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
