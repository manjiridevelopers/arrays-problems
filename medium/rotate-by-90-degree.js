/* Problem Statement: Given a matrix, your task is to rotate 
the matrix 90 degrees clockwise. */

/* Brute Force Approach:  Time Complexity -> O(n*n) | Space Complexity -> (n*n) */

function rotateBy90(matrix) {
  let rotatedMatrix = new Array(matrix.length)
    .fill()
    .map(() => new Array(matrix.length).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      rotatedMatrix[j][matrix.length - i - 1] = matrix[i][j];
    }
  }
  return rotatedMatrix;
}

const result = rotateBy90([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(result);

/* Answer:
    [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ]
*/

/* Brute Force Approach:  Time Complexity -> O(n*n) | Space Complexity -> (1) */

/* Algorithm: 
    1. Transpose the matrix
    2. Reverse each row
*/

function reverse(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    swapArrEle(arr, i, arr.length - i - 1);
  }
}

function swapArrEle(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function swapMatrixEl(matrix, i, j) {
  const temp = matrix[i][j];
  matrix[i][j] = matrix[j][i];
  matrix[j][i] = temp;
}

function rotateBy90Optimized(matrix) {
  /* Transpose of a matrix */
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      swapMatrixEl(matrix, i, j);
    }
  }

  /* Reversing each row */
  for (let i = 0; i < matrix.length; i++) {
    reverse(matrix[i]);
  }

  return matrix;
}

const resultOptimized = rotateBy90Optimized([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(resultOptimized);
