/* Problem Statement: Given an array Arr[] of integers, rearrange the numbers of 
the given array into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange to the lowest possible order 
(i.e., sorted in ascending order). 
*/

/* Algorithm:
    1. Find the last peak
    2. If the array is descending then return the reverse of the array i.e. Ascending array.
    3. Find the special case where  el > arr[peak - 1] && el < arr[peak]
    4. swap and sort
*/

function nextPermutation(arr) {
  let length = arr.length;
  if (arr.length <= 1) return arr;

  let peak = -1;

  for (let i = 1; i < length; i++) {
    if (arr[i] > arr[i - 1]) peak = i;
  }

  console.log("Longest Right Peak:", peak);

  if (peak == -1) {
    return arr.reverse();
  }

  let index = peak;

  for (let i = peak + 1; i < length; i++) {
    if (arr[i] > arr[peak - 1] && arr[i] < arr[index]) index = i;
  }

  swap(arr, index, peak - 1);
  sort(arr, peak, length - 1);
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function sort(arr, idx1, idx2) {
  const subarray = arr.slice(idx1, idx2 + 1);
  subarray.sort((a, b) => a - b);
  arr.splice(idx1, subarray.length, ...subarray); // Code To Note
}

const result = nextPermutation([2, 1, 5, 4, 3, 0, 0]);
console.log(result);
