/* Three Number Sum: Time Complexity -> O(n*n + nlogn) | Space Complexity -> O(3 * k) 
(k is no. of triplets) */

function threeNumSum(arr, targetSum) {
  let result = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let curNum = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    if (i > 0 && arr[i] == arr[i - 1]) continue;

    while (left < right) {
      let sum = curNum + arr[left] + arr[right];

      if (sum == targetSum) {
        let ans = [curNum, arr[left], arr[right]];
        result.push(ans);
        left++;
        right--;

        /* avoiding duplicates */
        while (left < right && arr[left] == arr[left - 1]) left++;
        while (left < right && arr[right] == arr[right + 1]) right--;
      } else if (sum < targetSum) {
        left++;
      } else if (sum > targetSum) {
        right--;
      }
    }
  }

  return result;
}

const result = threeNumSum([-1, 0, 1, 2, -1, -4], 0);
console.log(result);
