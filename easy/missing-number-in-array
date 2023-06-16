/* Missing number in an array using XOR */

function missingNumInArrayUsingXOR(arr) {
  let n = arr.length + 1;
  let x1 = arr[0];
  let x2 = 1;

  for (let i = 1; i < arr.length; i++) {
    x1 = x1 ^ arr[i];
  }

  for (let i = 2; i <= n; i++) {
    x2 = x2 ^ i;
  }

  console.log("Missing Number:", x1 ^ x2);
}

missingNumInArrayUsingXOR([3, 1, 5, 4, 6, 7]);
