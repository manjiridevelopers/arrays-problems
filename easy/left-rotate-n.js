/* Brute Force Approach */

/* PSEUDO CODE: 
  1. COPY THE N ELEMENTS FROM FRONT TO TEMP ARRAY
  2. SHIFT THE ELEMENTS BY N TO LEFT
  3. COPY THE TEMP ARRAY ELEMENT TO THE MAIN ARRAY LAST
*/

function leftRotateByN(array, n) {
  n = n % array.length;
  console.log(array.length);
  let temp = array.slice(0, n);
  for (let i = array.length - 1; i > array.length - n; i--) {
    array[i - n] = array[i];
  }

  for (let i = 0; i < temp.length; i++) {
    array[i + (array.length - n)] = temp[i];
  }

  console.log(array);
}

leftRotateByN([1, 2, 3, 4, 5, 6], 31);

/* Reversal Method */

/* PSEUDO CODE: 
  1. REVERSE THE FIRST N ELEMENTS
  2. REVERSE THE REMAINING ELEMENTS IN THE ARRAY
  3. REVERSE THE WHOLE ARRAY
*/

function leftRotateByNReversal(array, n) {
  n = n % array.length;

  reverseArray(array, 0, n - 1);
  reverseArray(array, n, array.length - 1);
  reverseArray(array, 0, array.length - 1);

  console.log(array);
}

function reverseArray(array, start, end) {
  while (start <= end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

leftRotateByNReversal([1, 2, 3, 4, 5, 6], 4);
