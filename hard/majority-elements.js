/*  Given an array of N integers. Find the elements that appear more than N/3 times 
in the array. If no such element exists, return an empty vector. */

/* Brute force: Time Complexity -> O(n*n) | Space Complexity -> O(1) */

function majorityElements(arr) {
  let n = arr.length;
  let result = new Set();

  for (let i = 0; i < n; i++) {
    let el = arr[i];
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] == el) count++;
    }

    if (count > Math.floor(n / 3)) result.add(el);
  }

  return Array.from(result); // line to note
}

const result = majorityElements([2, 2, 1, 1, 1, 2, 2]);
console.log(result);

/* Using Hash: Time Complexity -> O(n) | Space Complexity -> O(n) */

function majorityElementsWithHash(arr) {
  let hash = {};
  let n = arr.length;
  let result = [];

  arr.forEach((el) => {
    if (el in hash) hash[el]++;
    else hash[el] = 1;
  });

  Object.keys(hash).map((key) => {
    if (hash[key] > Math.floor(n / 3)) result.push(parseInt(key));
  });

  return result;
}

const resultWithHash = majorityElementsWithHash([2, 2, 1, 1, 1, 2, 2]);
console.log(resultWithHash);

/* Extended Boyer Moore’s Voting Algorithm:  Time Complexity -> O(n) | Space Complexity -> O(1) */

function boyerMooresVoting(arr) {
  let length = arr.length;
  let count1 = 0;
  let count2 = 0;
  let el1 = -Infinity;
  let el2 = -Infinity;
  let majorityElements = [];

  for (let i = 0; i < length; i++) {
    if (arr[i] == el1) count1++;
    else if (arr[i] == el2) count2++;
    else if (count1 == 0 && el2 != arr[i]) {
      el1 = arr[i];
      count1++;
    } else if (count2 == 0 && el1 != arr[i]) {
      el2 = arr[i];
      count2++;
    } else {
      count1--;
      count2--;
    }

    if (arr[i] == el1) count1++;
    else if (arr[i] == el2) count2++;
    else if (count1 == 0 && el2 != arr[i]) {
      el1 = arr[i];
      count1++;
    } else if (count2 == 0 && el1 != arr[i]) {
      el2 = arr[i];
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  /* Checking if stored el is majority element */

  count1 = 0;
  count2 = 0;

  arr.forEach((el) => {
    if (el == el1) count1++;
    if (el == el2) count2++;
  });

  if (count1 > Math.floor(length / 3)) majorityElements.push(el1);
  if (count2 > Math.floor(length / 3)) majorityElements.push(el2);

  return majorityElements;
}

const resultBoyerMoores = boyerMooresVoting([2, 2, 1, 1, 1, 2, 2]);
console.log(resultBoyerMoores);
