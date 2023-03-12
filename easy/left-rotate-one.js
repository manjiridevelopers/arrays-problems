function leftRotateByOne(array) {
  let first = array[0];

  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }

  array[array.length - 1] = first;
  console.log(array);
}

leftRotateByOne([1, 2, 3, 4, 5, 6]);
