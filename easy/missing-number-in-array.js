/* BRUTE FORCE */
function missingNumInArray(array) {
  let count = new Array(array.length).fill(0);
  let twoTimes, zeroTimes;

  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] == 0) zeroTimes = i;
    if (count[i] == 2) twoTimes = i;
  }

  console.log("Zero Times: ", zeroTimes);
  console.log("Two Times: ", twoTimes);
}

missingNumInArray([3, 1, 2, 5, 4, 6, 7, 5]);

/* OPTIMAL */
function missingNumInArrayTwo(array) {
  let n = array.length;
  let sum = (n * (n + 1)) / 2;
  let sumSq = (n * (n + 1) * (2 * n + 1)) / 6;

  array.forEach((element) => {
    sum -= element;
    sumSq -= element * element;
  });

  let missingNum = (sum + sumSq / sum) / 2;
  let repeatingNum = missingNum - sum;

  console.log("Missing Num: ", missingNum);
  console.log("Repeating Num: ", repeatingNum);
}

missingNumInArrayTwo([3, 1, 5, 4, 6, 7, 5]);
