function linearSearch(array, searchEl) {
  let isPresent = false;

  array.forEach((element) => {
    if (element == searchEl) isPresent = true;
  });

  console.log(`Is ${searchEl} Present? : `, isPresent);
}

linearSearch([1, 2, 3, 4, 5], 5);
linearSearch([1, 2, 3, 4, 5], 20);
