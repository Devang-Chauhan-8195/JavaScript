/// Primitive ///

// 7 types of primitive :- String,Number ,Boolean ,null,undefined, Symbol,
//                        BigInt

let name ="Devang"; //String

const score = 100;         // Number
const scorevalue = 1000.33;  // Number

const isLoggedIn =false;//Boolean 

const outsideTemp = null; //Null

let userEmail; //undefined

const id = Symbol('123');      //Symbol
const anotherId = Symbol('123') //Symbol

console.log(id === anotherId);

const bignumber = 321456987n //BigInt

//**********************************************************// */

/// Referrence (Non-primitive) ///

// Array ,Object ,Functions

let heros = ["Shaktiman", "Thor" ,"Avangers"];//Array

let myObj ={
    name: "Devang",     //Object
    age: 20,
}

 const myfunction = function(){   //Functions
    console.log("hello World");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++ 

// Stack (Primitive) , Heap (Non-primitive)


// Stack //
let myyoutubename ="DevangChauhan"

let anothername = myyoutubename;
anothername = "Devang Chauhan"

console.log(myyoutubename);
console.log(anothername);

// Heap //
let userOne={
    email : "Devang@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email ="Chauhan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


