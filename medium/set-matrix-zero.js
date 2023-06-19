/* Problem Statement: Given a matrix if an element in the matrix is 0 
then you will have to set its entire column and row to 0 and then return the matrix. */

/* Brute Force Approach: Time Complexity -> O(2*(n*m) + n + m) | Space Complexity -> O(1) */

function rowColConverter(arr, n, m) {
  /* converting row to -1 */
  for (let i = 0; i < arr[0].length; i++) {
    arr[n][i] = -1;
  }

  /* converting column to -1 */
  for (let i = 0; i < arr.length; i++) {
    arr[i][m] = -1;
  }
}

function setMatrixZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 0) rowColConverter(arr, i, j);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == -1) arr[i][j] = 0;
    }
  }

  return arr;
}

const result = setMatrixZero([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
console.log(result);

/* Approach No. 2:  Time Complexity -> O(2*(n*m)) | Space Complexity -> O(n + m) */

function setMatrixZeroSec(arr) {
  let row = new Array(arr.length).fill(0);
  let col = new Array(arr[0].length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (row[i] || row[j]) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
}

const resultSec = setMatrixZeroSec([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
console.log(resultSec);

/* Optimized Approach:  Time Complexity -> O(2*(n*m)) | Space Complexity -> O(1) */

function setMatrixZeroOptimized(arr) {
  let col = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 0) {
        arr[i][0] = 0; // for row

        if (j != 0) arr[0][j] = 0;
        else col = 0;
      }
    }
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
      if (arr[i][0] == 0 || arr[0][j] == 0) {
        arr[i][j] = 0;
      }
    }
  }

  if (arr[0][0] == 0) {
    for (let i = 0; i < arr[0].length; i++) {
      arr[0][i] = 0;
    }
  }

  if (col == 0) {
    for (let i = 0; i < arr[0].length; i++) {
      arr[i][0] = 0;
    }
  }

  return arr;
}

const resultOptimized = setMatrixZeroOptimized([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
console.log(resultOptimized);
