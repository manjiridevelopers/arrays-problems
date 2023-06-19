/* ChatGPT Solution: Time Complexity: O(n) | Space Complexity: O(1) */

/* Resource: https://www.youtube.com/watch?v=HbbYPQc-Oo4 */

function subarrayWithGivenSum(arr, target) {
  let start = 0;
  let end = 0;
  let currentSum = arr[0];

  while (end < arr.length) {
    if (currentSum == target) {
      return arr.slice(start, end + 1);
    }

    if (currentSum <= target) {
      end++;
      currentSum += arr[end];
    } else {
      start++;
      currentSum -= arr[start];
    }
  }
}

const result = subarrayWithGivenSum([1, 9, 3, 7], 10);
console.log(result);

/* Optimized Solution: Time Complexity -> O(n) | Space Complexity -> O(n) */

function subarrayWithGivenSumOptimized(arr, target) {
  let prefixSum = 0;
  let hash = {};
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    let diff = prefixSum - target;

    if (prefixSum == target) count++;
    if (diff in hash) count += hash[diff];

    hash[prefixSum] = hash[prefixSum] ? hash[prefixSum] + 1 : 1;
  }

  return count;
}

const resultOptimized = subarrayWithGivenSumOptimized(
  [3, 4, 7, 2, -3, 1, 4, 2],
  7
);
console.log(resultOptimized);
