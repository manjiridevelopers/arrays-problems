/* First Approach:  O(N * N) */

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum == target) return [i, j]; // Returning indices
    }
  }

  return [-1, -1];
}

const result = twoSum([2, 6, 5, 8, 11], 14);
console.log(result);

/* Hash Map Approach: O(N) Time Complexity | O(N) Space */

function twoSumHash(arr, target) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let otherHalf = target - num;

    if (otherHalf in hash) return [i, hash[otherHalf]];
    hash[num] = i;
  }

  return [1, -1];
}

const resultWithHash = twoSumHash([2, 6, 5, 8, 11], 14);
console.log(resultWithHash);

/* Two Pointers Method */

/* Algorithm: 
    1. Sort the array
    2. Takign two pointers: start = 0  and end = array.length - 1
    3. 
        a. if array[i] + arr[j] < target then i++
        b. if array[i] + array[j] > target then j++
        c. if array[i] + array[j] == target return [i, j]
    4. No results:  return [-1, -1]

*/

function twoSumWithTwoPointers(arr, target) {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let el1 = sortedArr[start];
    let el2 = sortedArr[end];
    let sum = el1 + el2;

    if (sum == target) {
      let idx1 = arr.indexOf(el1);
      let idx2 = arr.indexOf(el2);
      return [idx1, idx2];
    }
    if (sum < target) start++;
    if (sum > target) end--;
  }

  return [-1, -1];
}

const resultWithTwoPointers = twoSumWithTwoPointers([2, 6, 5, 8, 11], 14);
console.log(resultWithTwoPointers);
