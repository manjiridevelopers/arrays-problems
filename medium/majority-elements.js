/* Given an array of N integers, 
write a program to return an element that occurs 
more than N/2 times in the given array */

/* Brute force: Time Complexity -> O(n*n) | Space Complexity -> O(1) */

function majorityElements(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let el = arr[i];
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] == el) count++;
    }

    if (count > Math.floor(n / 2)) return el;
  }
}

const result = majorityElements([2, 2, 1, 1, 1, 2, 2]);
console.log(result);

/* Using Hash: Time Complexity -> O(n) | Space Complexity -> O(n) */

function majorityElementsWithHash(arr) {
  let hash = {};
  let n = arr.length;
  let result = -1;

  arr.forEach((el) => {
    if (el in hash) hash[el]++;
    else hash[el] = 1;
  });

  Object.keys(hash).map((key) => {
    if (hash[key] > Math.floor(n / 2)) result = key;
  });

  return parseInt(result);
}

const resultWithHash = majorityElementsWithHash([2, 2, 1, 1, 1, 2, 2]);
console.log(resultWithHash);

/* Moore's Voting Algorithm: Time Complexity -> O(n) | Space Complexity -> O(1)
Explanation: https://www.youtube.com/watch?v=n5QY3x_GNDg 
*/

function mooresVoting(arr) {
  let length = arr.length;
  let count = 1;
  let el = arr[0];

  for (let i = 1; i < length; i++) {
    if (arr[i] == el) count++;
    else {
      count--;
      if (count == 0) el = arr[i];
    }
  }

  /* Checking if stored el is majority element */

  let majorityCount = 0;

  arr.forEach((num) => {
    if (num == el) majorityCount++;
  });

  return majorityCount > length / 2 ? el : -1;
}

const resultMooresVoting = mooresVoting([2, 2, 1, 1, 1, 2, 2]);
console.log(resultMooresVoting);
