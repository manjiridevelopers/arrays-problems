function intersectionArray(array1, array2) {
  let result = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] == array2[j]) {
      result[k++] = array1[i++];
      j++;
    } else if (array1[i] < array2[j]) {
      i++;
    } else if (array1[i] > array2[j]) {
      j++;
    }
  }

  console.log(result);
}

intersectionArray([1, 2, 3, 5, 6], [2, 2, 3, 4, 6]);
