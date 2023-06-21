/* Two Traversals: Time Complexity -> O(n) | O(1) */
const maxProdSubArr = (arr) => {
  let maxLeft = arr[0];
  let maxRight = arr[0];
  let prod = 1;
  let hasZero = false;

  for (let i = 0; i < arr.length; i++) {
    prod *= arr[i];
    if (prod == 0) {
      prod = 1;
      hasZero = true;
      continue;
    }
    maxLeft = Math.max(prod, maxLeft);
  }

  prod = 1;

  for (let j = arr.length - 1; j >= 0; j--) {
    prod *= arr[j];
    if (prod == 0) {
      prod = 1;
      hasZero = true;
      continue;
    }
    maxRight = Math.max(prod, maxRight);
  }

  if (hasZero) return Math.max(Math.max(maxLeft, maxRight), 0);
  return Math.max(maxLeft, maxRight);
};

const result = maxProdSubArr([1, 2, -3, 0, -4, -5]);
console.log(result);
