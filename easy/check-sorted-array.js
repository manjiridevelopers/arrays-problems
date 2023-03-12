function checkSortedArray(array) {
  let isSorted = true;
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] < array[i - 1]) isSorted = false;
  }

  console.log("Is Array Sorted:", isSorted);
}

checkSortedArray([6, 7, 2, 3, 4, 5, 7]);

checkSortedArray([1, 2, 3, 4, 5, 6, 7]);
