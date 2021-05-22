// while loops
var myArray = [];

var i = 5;
while(i>=0) {
  myArray.push(i);
  i--;
}

// for loops
var myArray = [];

for (var i=1; i<=5; i++) {
  myArray.push(i);
}

// another for loop, incrementing by i+=2 for odd numbers
var myArray = [];

for (var i=1; i<=9; i+=2) {
  myArray.push(i);
}

// iterate over an array
var myArr = [ 2, 3, 4, 5, 6];

var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// do..while
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);