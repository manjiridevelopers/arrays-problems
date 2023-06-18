/*Problem Statement: You are given an array of prices where prices[i] is the price of a 
given stock on an ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock. Return the maximum profit you can achieve 
from this transaction. If you cannot achieve any profit, return 0.*/

/* Brute Force Approach: Time Complexity -> O(n*n) | Space Complexity -> O(1) */

function stockBuySell(arr) {
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) maxProfit = Math.max(arr[j] - arr[i], maxProfit);
    }
  }

  return maxProfit;
}

const result = stockBuySell([7, 1, 5, 3, 6, 4]);
console.log(result);

/* Optimized Solution:  Time Complexity -> O(n) | Space Complexity -> O(1) */

function stockBuySellOptimized(arr) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    minPrice = Math.min(minPrice, arr[i]);
    maxProfit = Math.max(maxProfit, arr[i] - minPrice);
  }

  return maxProfit;
}

const resultOptimized = stockBuySellOptimized([7, 1, 5, 3, 6, 4]);
console.log(resultOptimized);
