/* Time Complexity: O(n*n) | O(n*n)*/

function pascalsTriangle(numRows) {
  let triangle = [];

  for (let i = 0; i < numRows; i++) {
    let row = [];

    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        row.push(1);
      } else {
        const prevRow = triangle[i - 1];
        row.push(prevRow[j - 1] + prevRow[j]);
      }
    }

    triangle.push(row);
  }

  return triangle;
}

const result = pascalsTriangle(5);
console.log(result);

/* Little Different */

function pascalsTriangleSecond(numRows) {
  let triangle = [];
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      let prevRow = triangle[i - 1];
      let sum = prevRow[j - 1] + prevRow[j];
      row[j] = sum;
    }
    triangle.push(row);
  }

  return triangle;
}

const resultSecond = pascalsTriangleSecond(5);
console.log(resultSecond);
