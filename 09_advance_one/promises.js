const promiseOne = new Promise(function(resolve, reject){       //  -- function has two parts -- resolve and reject 
    //Do an async task
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()  //used to connect with .then()
    }, 1000)
})

// ------ consuming promise
promiseOne.then(function(){       //  .then() is connected with resolve , .then() gives a function/callback , it automatically receives an argument jo bhi above func mei task hua hai wo
    console.log("Promise consumed");
})



//------------------------------------------------------Another way of doing above task // doing the task in one part instead of two part
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})



//-------------------------------------------------

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})  //passing data through resolve
    }, 1000)
})

promiseThree.then(function(user){   
    console.log(user);
})

//---------------------------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true  // false  also try with false
        if (!error) {    //  if no error
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')    // reject is used to give error
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username      // only showing/returning username   // this returned value is going to next .then()  --- this processs is known as chaining
}).then((username) => {
    console.log(username);
}).catch(function(error){    // .catch () is used to take error value
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))    // it is like a default , hamesha hoga ye, it is used to tell kaam hua ke nahi...




// here handling promise with async await, async await is also like a .then() and .catch() it waits for task to happen // if work is completed then moves forward otherwise throughs error
// we dont handle catch() gracefully in async await

const promiseFive = new Promise(function(resolve, reject){hs 
    setTimeout(function(){
        let error = true    // false   --> also try with false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// -------------------------------------------this code will take time
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')   //fetch --> object // since it is a fetch time lagega so await kara lo and response mei add kar liya

//         const data = await response.json()    // converting reponse into JSON
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


//----------------------------------------------------------------- doing above task with .then() and .catch()

// ye code upar wale code se pehle show hoga -->> this will be covered in upcoming videos

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {    // data is nothing but above functions returned value
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
