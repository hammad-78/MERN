let a= 1;

for(let i = 0;i<100;i++){
    console.log(a+i);
}


// for-in loop is used to get keys and values(elements) of an object

let obj = {
    name : "Hammad",
    age : 20,
    role : "Programmer",
    company: "WeTech AI"
}


for (const key in obj) {
    const elements = obj[key];
    console.log(key, elements);
    
}

// for-of is an iterator used to listdown all elements, either it is a string or an array


for (const i of "Hammad") {
    console.log(i);
}

// While Loop

let point = 1;
while(point<6){
    console.log("Point: " +point);
    point++;
}

// do-while , runs atleast one time even if the condition is false
let pin = 10;
do {
    console.log(pin);
    pin--;
} while (pin<6);