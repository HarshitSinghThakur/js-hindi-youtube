const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");        // old way 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);      // modern way -- string interpolation

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);    // 2 underscors


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)   // in  substring negative indexing is not allowed
console.log(newString);

const anotherString = gameName.slice(-8, 4)   // in  slice negative indexing is allowed
console.log(anotherString);

const newStringOne = "   hitesh    "     // text entered by user in form 
console.log(newStringOne);
console.log(newStringOne.trim());      // trim removes extra starting space and end space from above text



const url = "https://hitesh.com/hitesh%20choudhary"   // url entered by user , but browser dont understands space so it replace by %20
console.log(url.replace('%20', '-'))          // change %20 with minus sign



console.log(url.includes('sundar'))    // finds keyword is present or not in url => false

console.log(gameName.split('-'));    // spilits the value on basis of - sign 
