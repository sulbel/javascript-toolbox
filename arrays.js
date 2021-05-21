// arrays are declared with square brackets and can have mixed data types
var myArray = ["string", 15];

// can have nested arrays
var myArray = [["array 1", 1], ["array 2", 2]];

// access array data with zero-based indices
var myArray = [2, 4, 6, 8];
var myData = myArray[0];
console.log(myData);

// update data in array
myArray[0] = 1;

// append data to an array with push()
myArray.push(10);

// remove data from the end of array with pop()
console.log("myArray before pop() " + myArray);
myData = myArray.pop();
console.log(myData);
console.log(myArray);

// remove data from the beginning of array with shift()
console.log("myArray before shift() " + myArray);
myData = myArray.shift();
console.log(myData);
console.log(myArray);

// add data to beginning of array with unshift
myArray.unshift(2);