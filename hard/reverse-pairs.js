/* Brute Force Approach 
Time Complexity: O(n*n) | Space Complexity: O(n)
*/

function reversePair(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > 2 * arr[j]) {
        count++;
      }
    }
  }

  return count;
}

const result = reversePair([3, 2, 1, 4]);
console.log(result);

/* Optimum Solution using Merge Sort */
class Solution {
  reversePairs(nums) {
    const n = nums.length;
    return this.mergeSort(nums, 0, n - 1);
  }

  mergeSort(nums, startIdx, endIdx) {
    if (startIdx >= endIdx) {
      return 0;
    }
    let count = 0;
    const mid = Math.floor((startIdx + endIdx) / 2);

    count += this.mergeSort(nums, startIdx, mid);
    count += this.mergeSort(nums, mid + 1, endIdx);
    count += this.merge(nums, startIdx, mid, endIdx);
    return count;
  }

  merge(nums, startIdx, mid, endIdx) {
    let count = 0;
    const a = new Array(endIdx - startIdx + 1);
    let index = 0;

    let i = startIdx;
    let j = mid + 1;

    while (i <= mid && j <= endIdx) {
      if (nums[i] > 2 * nums[j]) {
        count += mid - i + 1;
        j++;
      } else {
        i++;
      }
    }

    i = startIdx;
    j = mid + 1;

    while (i <= mid && j <= endIdx) {
      if (nums[i] > nums[j]) {
        a[index++] = nums[j++];
      } else {
        a[index++] = nums[i++];
      }
    }

    while (i <= mid) {
      a[index++] = nums[i++];
    }

    while (j <= endIdx) {
      a[index++] = nums[j++];
    }

    for (let k = 0; k < a.length; k++) {
      nums[startIdx + k] = a[k];
    }

    return count;
  }
}

const solution = new Solution();
const resultOptimum = solution.reversePairs([1, 3, 2, 3, 1]);
console.log(resultOptimum);
