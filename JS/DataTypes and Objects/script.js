console.log("Hey we are learning JavaScript")

var a =5;
var b =67;
var c ='Hammad';

console.log(a+b+8);

console.log(typeof a, typeof b, typeof c);


// we mostly use let to declare variable because it is a block level element

{
    let a =55;
    console.log(a);
}

console.log(a);


let x = "Jawad";
let y = 22;
let z = 7.8856;
let p = true;
let q = undefined;
let r = null;


console.log(x,y,z,p,q,r,);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r,);



let obj={
    'name': "Hammad",
    'age': 20,
    'salary' : 150000
}

console.log(obj);

obj.post = "Software Enginner";

console.log(obj);

obj.salary = 200000 ;
obj.post = "Senior Software Enginner";
console.log(obj);
