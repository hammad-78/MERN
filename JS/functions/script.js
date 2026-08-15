function greeting(name) {
    console.log("Hey " + name + ", you are good");
    console.log("Hey " + name + ", you are nice");
    console.log("Hey " + name + ", you are humble");
    console.log("Hey " + name + ", you are generous");
    console.log("Hey " + name + ", you are doing pretty good");
}

// greeting("Hammad");
// greeting("Jawad")


function sum(a,b) {
    return a+b;

}

result = sum(5,3);

console.log("The Sum of a and b is: " + result);



// arrow function , gives benefit that arrow function can be passed to another function as a value as well


const variable = (x)=>{
    console.log("I am a arrow function assigned to a variable with number: "+x);
}

variable(55);
variable(67);