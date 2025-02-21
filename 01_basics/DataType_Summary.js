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

