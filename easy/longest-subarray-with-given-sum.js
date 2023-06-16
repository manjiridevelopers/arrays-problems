/* Brute force approach */

function longestSubArrayWithTargetSum(arr, k) {
  len = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum == k) {
        len = Math.max(j - i + 1, len);
      }
    }
  }

  console.log("Length of the longest subarray:", len);
}

longestSubArrayWithTargetSum([2, 3, 5, 1, 9], 10);

/* Optimum approach with time complexity of O(n) but in some cases it is also O(n * log n)*/

/* Algorithm: 
    prefix sum = 2
    rem = x - k
    len = i - preSumHash(rem)
    maxLen = max(maxLen, len)
*/

function longestSubArrayWithTargetSumTwo(arr, k) {
  let sum = 0;
  let maxLen = 0;
  let preSumHash = {};

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum == k) maxLen = Math.max(maxLen, i + 1);

    let diff = sum - k;

    if (diff in preSumHash) {
      let len = i - preSumHash[diff];
      maxLen = Math.max(maxLen, len);
    }

    if (!diff in preSumHash) {
      preSumHash[sum] = i;
    }
  }

  console.log("Length of the longest subarray:", maxLen);
}

longestSubArrayWithTargetSumTwo([2, 3, 5, 1, 9], 10);
