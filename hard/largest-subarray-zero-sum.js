/* Time Complexity -> O(n*n) | Space Complexity -> O(1) */

function largestSubarrLen(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum == 0) max = Math.max(max, j - i + 1);
    }
  }

  return max;
}

const result = largestSubarrLen([9, -3, 3, -1, 6, -5]);
console.log(result);

/* Optimized Solution: Time Complexity -> O(n) | Space Complexity -> O(n) */

function largestSubarrLenOptimized(arr) {
  let prefixSum = 0;
  let hash = {};
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    if (prefixSum == 0) max = i + 1;
    else if (prefixSum in hash) max = Math.max(max, i - hash[prefixSum]);
    else hash[prefixSum] = i;
  }

  return max;
}

const resultOptimized = largestSubarrLenOptimized([9, -3, 3, -1, 6, -5]);
console.log(resultOptimized);

/*Note: also check subarray-with-given-sum */
