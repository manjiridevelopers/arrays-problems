/* Normal Way of Sorting: O(nlogn)*/

function sortZerosOnesTwos(arr) {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}

function quickSort(arr, start, end) {
  if (start >= end) return;
  let pivot = start;
  let i = start + 1;
  let j = end;

  while (i <= j) {
    if (arr[i] > arr[pivot] && arr[j] < arr[pivot]) swap(arr, i, j);
    if (arr[i] <= arr[pivot]) i++;
    if (arr[j] >= arr[pivot]) j--;
  }

  swap(arr, pivot, j);
  quickSort(arr, start, j - 1);
  quickSort(arr, j + 1, end);
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const resultSimpleSort = sortZerosOnesTwos([0, 2, 1, 2, 0, 1]);
console.log(resultSimpleSort);

/* Counting way for sorting: Time Complexity O(N) and Space Complexit O(1)*/
function sortZerosOnesTwosHash(arr) {
  let counts = new Array(3).fill(0);

  arr.forEach((el) => counts[el]++);

  console.time();

  for (let i = 0; i < counts[0]; i++) arr[i] = 0;
  for (let i = counts[0]; i < counts[0] + counts[1]; i++) arr[i] = 1;
  for (let i = counts[0] + counts[1]; i < arr.length; i++) arr[i] = 2;

  console.timeEnd();

  return arr;
}

const resultSortWithHash = sortZerosOnesTwosHash([0, 2, 1, 2, 0, 1]);
console.log(resultSortWithHash);

/* Dutch National Flag Algorithm*/

function sortZerosOnesTwosByDutchAlgo(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      swap(arr, mid, high);
      high--;
    }
  }

  return arr;
}

const resultSortWithDutchAlgo = sortZerosOnesTwosByDutchAlgo([
  0, 2, 1, 2, 0, 1,
]);
console.log(resultSortWithDutchAlgo);
