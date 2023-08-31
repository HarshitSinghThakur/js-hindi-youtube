// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//Typescript dont allow two different DT comparision

// console.log("2" > 1);               => true
// console.log("02" > 1);              => true


//Not predicatable result (avoid such type of conversion)

console.log(null > 0);                  =>false
console.log(null == 0);                 =>false
console.log(null >= 0);                 =>true

//the reason is that an equality check == and comparisions > ,<, >=, <= work differently.
//comparisions convert NULL to a number , treating it as 0
//that's why null >=0 -- true    and null>0 is false;
 



console.log(undefined == 0);     => false
console.log(undefined > 0);      =>false
console.log(undefined < 0);      =>false



// ===     //Strict check --it checks values as well as its data types 

console.log("2" === 2);



//Summary--- null kabhi 0 toh kabhi NAN mei convert hota hai , so ha ye problem hai language mei, (So avoid such type of conversion ans use clean code.)
