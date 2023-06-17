/* Time Complexity: O(n) | Space Complexity: O(1) */

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
