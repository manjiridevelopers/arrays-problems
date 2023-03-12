/* Q: Remove duplicates from sorted array */

function removeDuplicatesFirst(array) {
  let result = new Array(...new Set(array));
  console.log(result);
}

removeDuplicatesFirst([1, 2, 2, 2, 3, 3, 4, 4]);

/* ************************* */

function removeDuplicatesSecond(array) {
  let hash = {};
  for (let el of array) {
    if (el in hash) hash[el]++;
    else hash[el] = 1;
  }

  let result = Object.keys(hash).map((el) => parseInt(el));
  console.log(result);
}

removeDuplicatesSecond([1, 2, 2, 2, 3, 3, 4, 4]);

/* ************************* */

function removeDuplicatesThird(array) {
  let result = array.filter((el, index) => array.indexOf(el) === index);

  console.log(result);
}

removeDuplicatesThird([1, 2, 2, 2, 3, 3, 4, 4]);
