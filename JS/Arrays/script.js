let arr = [1,2,4,6,7];

console.log(arr);

console.log("Lenght of array: " + arr.length);

arr[0] = 5666;

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);


console.log("Array as a String: " + arr.toString());


console.log("Join Function: " + arr.join(" and "));

arr.pop();

console.log("Element of array after pop method (last element popped out): " + arr);

arr.push(100);
console.log("Element of array after push method (element added at last): " + arr);

arr.shift();
console.log("Element of array after shift method (first element removed): " + arr);

arr.unshift("Hammad");  
console.log("Element of array after unshift method (element added at beginning): " + arr);

delete arr[2];
console.log("Element of array after deleting element at index 4 (length remains same) " + arr);
