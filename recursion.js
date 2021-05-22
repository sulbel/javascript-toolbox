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

  