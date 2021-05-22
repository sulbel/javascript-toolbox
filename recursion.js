// recursively multiply n-elements of an array
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
}

// recursively sum n-elements of array
function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return(sum(arr, n-1) + arr[n-1]);
    }
}

// return an array with elements counting from 1->n 
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
}

// return an array with elements counting n->1
function countdown(n){
    if (n<1) {
      return [];
    } else {
      const countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
}

// return an array of numbers counting from [startNum, endNum]
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
      return [startNum];
    } else {
      const rangeArr = rangeOfNumbers(startNum, endNum-1);
      rangeArr.push(endNum);
      return rangeArr;
    }
};