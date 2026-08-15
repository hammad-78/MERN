let num = Math.random();

let first,second,third;


if(num<0.33){
    first = "Amazing";
  
}
else if(num>=0.33 && num<0.66){
    first = "Crazy";

}
else{
      first = "Fire";

}


num = Math.random()
if(num<0.33){

    second = "Enginee";

}
else if(num>=0.33 && num<0.66){

    second = "Food";

}
else{

    second = "Garments";

}

num = Math.random()
if(num<0.33){
    third = "Bros";
}
else if(num>=0.33 && num<0.66){
    third = "Limited";
}
else{
    third = "Hub";
}


console.log(`${first} ${second} ${third}`);
