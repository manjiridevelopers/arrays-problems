/* Problem Statement: Given an array, print all the elements which are leaders. 
A Leader is an element that is greater than all of the elements on its right 
side in the array. */

/* Brute Force Approach: Time Complexity -> O(n*n) | Space Complexity -> O(n) */

function leadersInAnArray(arr) {
  let leaders = [];

  for (let i = 0; i < arr.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) isLeader = false;
    }

    if (isLeader == true) leaders.push(arr[i]);
  }

  return leaders;
}

const result = leadersInAnArray([10, 22, 12, 3, 0, 6]);
console.log(result);

/* Optimized Solution: Time Complexity -> O(n) | Space Complexity -> O(n) */

function leadersInAnArrayOptimized(arr) {
  let leaders = [];
  let max = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      leaders.push(arr[i]);
    }
  }

  return leaders;
}

const resultOptimized = leadersInAnArrayOptimized([10, 22, 12, 3, 0, 6]);
console.log(resultOptimized);
