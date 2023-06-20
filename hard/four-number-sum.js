/* Time Complexity -> O(n*n*n) | Space Complexity -> O(3 * k) 
(k is no. of triplets) */

function fourNumberSum(arr, target) {
  let quadruplet = new Set();
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue; //avoiding duplicates

    for (let j = i + 1; j < arr.length; j++) {
      if (j > i + 1 && arr[j] == arr[j - 1]) continue; //avoiding duplicates

      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        let sum = arr[i] + arr[j] + arr[left] + arr[right];
        if (sum == target) {
          let subarr = [arr[i], arr[j], arr[left], arr[right]];
          quadruplet.add(subarr);

          left++;
          right--;

          /* avoiding duplicates */
          while (left < right && arr[left] == arr[left - 1]) left++;
          while (left < right && arr[right] == arr[right + 1]) right--;
        } else if (sum < target) left++;
        else if (sum > target) right--;
      }
    }
  }

  return Array.from(quadruplet);
}

const result = fourNumberSum([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9);
console.log(result);
