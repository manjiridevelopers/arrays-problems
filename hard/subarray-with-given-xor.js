/* Brute Force Approach: Time Complexity -> O(n*n) | Space Complexity -> O(1) */

function subarrayWithGivenXor(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let xorSum = 0;
    for (let j = i; j < arr.length; j++) {
      xorSum ^= arr[j];
      if (xorSum == k) count++;
    }
  }

  return count;
}

const result = subarrayWithGivenXor([4, 2, 2, 6, 4], 6);
console.log(result);

/* Optimized Prefix: Time Complexity -> O(n) | Space Complexity -> O(n)*/

function subarrayWithGivenXorOptimized(arr, k) {
  let count = 0;
  let hash = {};
  let xor = 0;
  hash[xor] = 1;

  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
    let res = xor ^ k;
    count += hash[res] || 0;
    hash[xor] = hash[xor] ? hash[xor] + 1 : 1;
  }

  return count;
}

const resultOptimized = subarrayWithGivenXorOptimized([4, 2, 2, 6, 4], 6);
console.log(resultOptimized);
