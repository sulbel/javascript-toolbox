// functions are defined with keyword `function`
function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
  }
  
  functionWithArgs(2, 4);

// function with return value
function sumTwo(int1, int2) {
    return(int1 + int2);
}
console.log(sumTwo(1, 2));

// booleans and conditionals
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

// if..else if..else
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  }
  testElseIf(7);

// switch statements
function switchOfStuff(val) {
    var answer = "";
    switch(val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
        break;
    }
    return answer;
  }

// an interesting use of switches...the lumped cases will all produce same output
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
    return answer;
  }

  // ternary conditional
function checkEqual(a, b) {
    return (a === b ? "Equal" : "Not Equal");
}
  
  // can chain multiple ternary conditionals
function checkSign(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
        : "zero"
}