function largest(array) {
  let max = -Infinity;

  for (let el of array) {
    if (el > max) max = el;
  }

  console.log("Largest Element:", max);
}

largest([6, 7, 2, 3, 4, 5, 7]);

/* By sorting first in ascending order and then picking the last element */
function largestSort(array) {
  array.sort((a, b) => a - b);
  console.log("Largest Element:", array[array.length - 1]);
}

largestSort([6, 7, 2, 3, 4, 5, 7]);
