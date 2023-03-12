function unionArray(array1, array2) {
  let result = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) result[k++] = array1[i++];
    else result[k++] = array2[j++];
  }

  if (i < array1.length) result[k++] = array1[i++];
  if (j < array2.length) result[k++] = array2[j++];

  console.log(result);
}

unionArray([1, 2, 4, 5], [2, 2, 3, 4, 6]);
