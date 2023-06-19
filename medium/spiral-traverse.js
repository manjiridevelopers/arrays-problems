/* Time Complexity -> O(n*m) | Space Complexity -> O(n*m) */

function spiralTraverse(arr) {
  let T = 0;
  let R = arr[0].length - 1;
  let B = arr.length - 1;
  let L = 0;
  let dir = 0;
  let result = [];

  while (T <= B && L <= R) {
    if (dir == 0) {
      for (let i = L; i <= R; i++) result.push(arr[T][i]);
      T++;
    }

    if (dir == 1) {
      for (let i = T; i <= B; i++) result.push(arr[i][R]);
      R--;
    }

    if (dir == 2) {
      for (let i = R; i >= L; i--) result.push(arr[B][i]);
      B--;
    }

    if (dir == 3) {
      for (let i = B; i >= T; i--) result.push(arr[i][L]);
      L++;
    }

    dir = (dir + 1) % 4;
  }

  return result;
}

const result = spiralTraverse([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
console.log(result);
