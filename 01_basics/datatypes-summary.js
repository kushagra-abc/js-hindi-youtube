//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outTemp=null
let userEmail ;

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id==anotherId);

//const bigNumber = 3454353534241222222222n



//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj",'doga'];

let myObj= {
    name:"Kushagra",
    age:22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object




//***********************

// Stack (Primitive), copy bnta ; Heap (Non-Primitive), reference milta

let myYTname = "hit.com"

let anotherName = myYTname
anotherName = "chaicode"

console.log(myYTname);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hit@google.com"
console.log(userOne.email);
console.log(userTwo.email);
