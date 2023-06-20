/* Time Complexity -> O(n + nlogn) | Space Complexity -> O(n) */

function mergeOverlappingIntervals(arr) {
  arr.sort((a, b) => a[0] - b[0]);

  let result = [arr[0]];
  let currentInterval = arr[0];

  arr.forEach((nextInterval) => {
    let [_, currentIntervalEnd] = currentInterval;
    let [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      result.push(currentInterval);
    }
  });

  return result;
}

const result = mergeOverlappingIntervals([
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18],
]);
console.log(result);
