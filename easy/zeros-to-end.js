/* Brute Force Approach */

function ZerosToEnd(array) {
  let count = 0;
  let result = [];

  array.forEach((element) => {
    if (element === 0) count++;
    else result.push(element);
  });

  while (count !== 0) {
    result.push(0);
    count--;
  }

  console.log(result);
}

ZerosToEnd([2, 0, 4, 5, 0, 0, 1, 0]);

/* OPTIMAL APPROACH */

/*
PSEUDOCODE: 

1. FIND THE ELEMENT 0 AND SWAP IT WITH THE NEXT NON-ZERO ELEMENT
2. INCREMENT THE COUNTER AND REPEAT THE STEP
*/

function ZerosToEndOptimal(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] == 0) {
      let j = i + 1;
      while (j < array.length) {
        if (array[j] != 0) {
          swap(array, i, j);
          break;
        } else j++;
      }
    }
  }
}

function swap(array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

ZerosToEndOptimal([2, 0, 4, 5, 0, 0, 1, 0]);
