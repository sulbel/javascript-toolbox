// generate a random decimal number in the range [0,1)
var randDecimal = Math.random();

// to generate a random whole number, scale the result of Math.random() with multiplication, and take floor
var randWhole = Math.floor(Math.random() * 10);     // whole number in range [0, 9]

// generate random whole numbers within a range
var myMin = 10;
var myMax = 100;
var randRange = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;