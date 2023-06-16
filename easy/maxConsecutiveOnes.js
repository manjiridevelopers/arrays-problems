function maxConsecutiveOnes(array) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) count = 0;
    else {
      count++;
      if (max < count) max = count;
    }
  }

  return console.log("Maximum Consecutive Ones:", max);
}

maxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
