const email= []

if (email) {
    console.log("got mail")
    
}else{
    console.log("no email")
}

//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

//"0", 'false', " ", [], {}, function(){}

// if(email.length===0){
//     console.log("arr empty")
// }

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("empty")
}


//Nullish Coalescing Operator(??):null undefined

let val1;
// val1= 5?? 10
// val1 = null?? 10 
// val1 = undefined?? 15
val1 = null?? 10?? 15

console.log(val1);

// terniary operator
// condition ? true: false

const idePrice =100
idePrice<=80 ? console.log("less than 80"): console.log("more than 80");


