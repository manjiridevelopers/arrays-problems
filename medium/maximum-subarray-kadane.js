/* Brute Force Approach: Time Complexity -> O(n * n) | Space Complexity -> O(1) */

function maxSubarray(arr) {
  let max = -Infinity;
  let subArrIndices = [-1, -1];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > max) {
        max = sum;
        subArrIndices = [i, j];
      }
    }
  }
  return {
    maxSum: max,
    subArrIndices: subArrIndices,
  };
}

const maxSubarrayResult = maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(maxSubarrayResult);

/*  Kadane's Algorithm: Time Comlexity -> O(n) | Space Complexity -> O(1) */

function maxSubarrayKadane(arr) {
  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], arr[i] + maxEndingHere);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

const maxSubarrayKadaneResult = maxSubarrayKadane([
  -2, 1, -3, 4, -1, 2, 1, -5, 4,
]);
console.log("maxSUM:", maxSubarrayKadaneResult);

/* maxSubArray with indices */

function maxSubarrayKadaneIndices(arr) {
  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];
  let startIdx = 0;
  let endIndx = 0;
  let currentIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    //   maxEndingHere = Math.max(arr[i], arr[i] + maxEndingHere);
    if (arr[i] > maxEndingHere + arr[i]) {
      maxEndingHere = arr[i];
      currentIdx = i;
    } else {
      maxEndingHere = maxEndingHere + arr[i];
    }

    // maxSoFar = Math.max(maxSoFar, maxEndingHere);

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      startIdx = currentIdx;
      endIndx = i;
    }
  }

  return {
    maxSum: maxSoFar,
    subArrIndices: [startIdx, endIndx],
  };
}

const maxSubarrayKadaneIndicesResult = maxSubarrayKadaneIndices([
  -2, 1, -3, 4, -1, 2, 1, -5, 4,
]);
console.log(maxSubarrayKadaneIndicesResult);
