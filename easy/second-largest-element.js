function secondLargest(array) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let el of array) {
    if (el > max) {
      secondMax = max;
      max = el;
    }
  }

  console.log("Second Largest Element:", secondMax);
}

secondLargest([6, 7, 2, 3, 4, 5, 7]);
