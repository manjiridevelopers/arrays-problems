/* Brute Force Approach: Time Complexity -> O(n*n) | Space Complexity -> O(1) */
function countInversions(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) count++;
    }
  }

  return count;
}

const result = countInversions([5, 4, 3, 2, 1]);
console.log(result);

/* Optimized approach:  Time Complexity -> O(nlogn) | Space Complexity -> O(n) */

function mergeSort(arr, count) {
  if (arr.length <= 1) return { sortedArr: arr, count: 0 };
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  let leftSortedArr = mergeSort(leftArr);
  let rightSortedArr = mergeSort(rightArr);

  let mergeArr = merge(leftSortedArr.sortedArr, rightSortedArr.sortedArr);

  let count = mergeArr.count + leftSortedArr.count + rightSortedArr.count;
  return { sortedArr: arr, count: count };
}

function merge(leftArr, rightArr) {
  let sortedArr = [];
  let i = 0;
  let j = 0;
  let k = 0;
  let count = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      sortedArr[k++] = leftArr[i++];
    } else {
      sortedArr[k++] = rightArr[j++];
      count += leftArr.length - i;
    }
  }

  return { sortedArr: arr, count: count };
}

function countInversionsOptimized(arr) {
  let count = 0;
  mergeSort(arr, count);
  return count;
}

const resultOptimized = countInversionsOptimized([5, 4, 3, 2, 1]);
console.log(resultOptimized);
