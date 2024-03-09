const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));       // used to fix upto to 2 decimal palces

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));   //precision -- range ==> b/w 1 and 21 and returns a string  // priority is before the decimal point

const hundreds = 1000000                        // toLocaleString()  ---> default standard for US
// console.log(hundreds.toLocaleString('en-IN'));       //('en-IN')  ---> for indian standard


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));     //absolute val , change sign of neg to positive
// console.log(Math.round(4.6));  //round off
// console.log(Math.ceil(4.2));   // selects top val to roundoff i.e 2   so it becomes 5
// console.log(Math.floor(4.9));   //  selects lowest val to roundoff i.e 4   so it becomes 4
// console.log(Math.min(4, 3, 6, 8));   //  gives min val
// console.log(Math.max(4, 3, 6, 8));     // gives max val

console.log(Math.random());              // used more,   gives random val b/w 0 and 1
console.log((Math.random()*10) + 1);      // *10 to shift point at one place    || add 1 to avoid getting min value 0
console.log(Math.floor(Math.random()*10) + 1);    // rounds off to lowest val and gives only one digit


//trick, 
const min = 10
const max = 20
                                                                  // it gives random val b/w 10 to 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)     // do practice ,, it is easy --- vid 2.49
