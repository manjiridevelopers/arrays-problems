/* Problem Statement: merge two sorted arrays without extra space */

/* Brute force approach: Time Complexity -> O(n + m) | Space Complexity -> O(n + m) */

function mergeSortedArray(arr1, arr2) {
  let arr3 = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) arr3[k++] = arr1[i++];
    else arr3[k++] = arr2[j++];
  }

  while (i < arr1.length) arr3[k++] = arr1[i++];
  while (j < arr2.length) arr3[k++] = arr2[j++];

  return arr3;
}

const result = mergeSortedArray([1, 2, 3, 4], [4, 5, 6, 7]);
console.log(result);

/* Better Approach: Time Complexity -> O(nlogn + mlogm + min(n , m)) | Space Complexity -> O(1)*/

function swap(arr1, arr2, left, right) {
  let temp = arr1[left];
  arr1[left] = arr2[right];
  arr2[right] = temp;
}

function mergeSortedArraySecond(arr1, arr2) {
  let left = arr1.length - 1; // pointer for 1st array
  let right = 0; // pointer for 2nd array

  while (left >= 0 && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      swap(arr1, arr2, left, right);
      left--;
      right++;
    } else {
      break;
    }
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return arr1 + arr2;
}

const resultSecond = mergeSortedArraySecond([1, 2, 3, 7], [4, 5, 6, 7]);
console.log(result);

/* Optimum Approach: Time Complexity -> O(log (n + m) + (n + m)) | Space Complexity -> O(1) */

function mergeSortedArrayThird(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let totalLen = n + m;
  let shell = Math.ceil(totalLen / 2);

  while (shell > 0) {
    // Outer Loop Time Complexity: O(log (n + m))
    let left = 0;
    let right = left + shell;

    while (right < totalLen) {
      // Inner Loop Time Complexity: O(n + m)
      if (left < n && right >= m) {
        swap(arr1, arr2, left, right - n);
      } else if (left >= n) {
        swap(arr2, arr2, left - n, right - n);
      } else {
        swap(arr1, arr1, left, right);
      }
      left++;
      right++;
    }

    if (shell == 1) break;

    shell = Math.ceil(shell / 2);
  }
}

const resultThird = mergeSortedArrayThird([1, 2, 3, 7], [4, 5, 6, 7]);
console.log(result);
