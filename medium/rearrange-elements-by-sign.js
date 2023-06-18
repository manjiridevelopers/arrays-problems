/* Problem Statement: There’s an array ‘A’ of size ‘N’ with an equal number of positive
 and negative elements. Without altering the relative order of positive and negative 
 elements, you must return an array of alternately positive and negative values. */

/* Brute Force Approach: Time Complexitt -> O(n) + O(n/2) | Space Complexity -> O(n) */
function rearrangeElementsBySign(arr) {
  let n = arr.length;
  let positiveNums = [];
  let negativeNums = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) positiveNums.push(arr[i]);
    if (arr[i] < 0) negativeNums.push(arr[i]);
  }

  for (let i = 0; i < n / 2; i++) {
    arr[2 * i] = positiveNums[i];
    arr[2 * i + 1] = negativeNums[i];
  }

  return arr;
}

const result = rearrangeElementsBySign([1, 2, -3, -1, -2, 3]);
console.log(result);

/* Optimized Approach: Time Complexity -> O(n) | Space Complexity -> O(1) */

function rearrangeElementsBySignOptimized(arr) {
  let result = new Array(arr.length).fill(0);
  let posIdx = 0;
  let negIdx = 1;

  arr.forEach((el) => {
    el > 0
      ? ((result[posIdx] = el), (posIdx += 2))
      : ((result[negIdx] = el), (negIdx += 2));

    /*
        if (el > 0) {
        result[posIdx] = el;
        posIdx += 2;
        } else {
        result[negIdx] = el;
        negIdx += 2;
        }
    */
  });

  return result;
}

const resultOptimized = rearrangeElementsBySignOptimized([1, 2, -3, -1, -2, 3]);
console.log(resultOptimized);
