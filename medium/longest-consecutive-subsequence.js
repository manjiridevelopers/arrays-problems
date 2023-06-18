/* Problem Statement: You are given an array of ‘N’ integers. You need to 
find the length of the longest sequence which contains the consecutive elements. */

/* Brute Force Approach: Time Complexity -> O(nlogn) | Space Complexity -> O(1) */

function longestSubSeq(arr) {
  arr.sort((a, b) => a - b);
  let longest = 1;
  let curLongest = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1] + 1) curLongest++;
    else curLongest = 1;

    longest = Math.max(longest, curLongest);
  }

  return longest;
}

const result = longestSubSeq([100, 200, 1, 3, 2, 4]);
console.log(result);

/* Optimized approach using hash: Time Complexity -> O(n) | O(n) */

function longestSubSeqHash(arr) {
  let hash = {};
  let longest = 1;
  let currLongest = 1;

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = i;
  }

  Object.keys(hash).map((el) => {
    if (parseInt(el) + 1 in hash) currLongest++;
    longest = Math.max(currLongest, longest);
  });

  return longest;
}

const resulWithtHash = longestSubSeqHash([100, 200, 1, 3, 2, 4]);
console.log(resulWithtHash);
