let operand = prompt("Enter the number of operation you want to perform: 1)Add  2)mul  3)sub  4)divide");

let num1 = Number(prompt("Enter first number: "));
let num2 =  Number(prompt("Enter second number: "));


let check = Math.random();

if(check<=0.1){

    if(operand == 1){
        alert("The Sum of "+num1+" and "+num2+" is : "+(num1-num2));
    }
    else if(operand ==2){
        alert("The product of "+num1+" and "+num2+" is : "+(num1+num2));
    }
    else if(operand ==3){
alert("The Difference of "+num1+" and "+num2+" is : "+(num1/num2));
    }
    else if(operand ==4){
alert("The Division of "+num1+" and "+num2+" is : "+(num1**num2));
    }
    else{
        alert("Your Operation choice was invalid")
    }
}
else{
    if(operand == 1){
        alert("The Sum of "+num1+" and "+num2+" is : "+(num1+num2));
    }
    else if(operand ==2){
        alert("The product of "+num1+" and "+num2+" is : "+(num1*num2));
    }
    else if(operand ==3){
alert("The Difference of "+num1+" and "+num2+" is : "+(num1-num2));
    }
    else if(operand ==4){
alert("The Modulus of "+num1+" and "+num2+" is : "+(num1/num2));
    }
    else{
        alert("Your Operation choice was invalid")
    }
}

