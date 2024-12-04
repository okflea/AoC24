import * as fs from 'fs';

const filePath = 'input.txt';

try {
  const data = fs.readFileSync(filePath, 'utf8');

  const lines = data.trim().split('\n').map(line => line.trim());
  const grid = lines.map(line => line.split(''));
  console.log("A");
  console.log(countXmas(grid));

} catch (err) {
  console.error('Error reading file:', err);
}
function countXmas(grid: string[][]) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 'X') {
        count += checkForXmasHorizontally(grid, i, j);
        count += checkForXmasVertically(grid, i, j);
        count += checkForXmasDiagonally(grid, i, j);
      }
    }
  }
  return count;
}
function checkForXmasHorizontally(grid: string[][], i: number, j: number): number {
  if (i < 0 || i > grid.length || j < 0 || j > grid[i].length) return 0
  let count = 0
  //checking forward 
  if (grid[i][j + 3]) {
    if (grid[i][j] == 'X' && grid[i][j + 1] == 'M' && grid[i][j + 2] == 'A' && grid[i][j + 3] == 'S') {
      count++
    }
  }
  //checking backward
  if (grid[i][j - 3]) {
    if (grid[i][j] == 'X' && grid[i][j - 1] == 'M' && grid[i][j - 2] == 'A' && grid[i][j - 3] == 'S') {
      count++
    }
  }
  return count
}
function checkForXmasVertically(grid: string[][], i: number, j: number): number {
  if (i < 0 || i > grid.length || j < 0 || j > grid[i].length) return 0
  let count = 0
  //checking down
  if (grid[i + 3]) {
    if (grid[i][j] == 'X' && grid[i + 1][j] == 'M' && grid[i + 2][j] == 'A' && grid[i + 3][j] == 'S') {
      count++
    }
  }
  //checking up
  if (grid[i - 3]) {
    if (grid[i][j] == 'X' && grid[i - 1][j] == 'M' && grid[i - 2][j] == 'A' && grid[i - 3][j] == 'S') {
      count++
    }
  }
  return count
}
function checkForXmasDiagonally(grid: string[][], i: number, j: number): number {
  if (i < 0 || i > grid.length || j < 0 || j > grid[i].length) return 0
  let count = 0
  //checking down right
  if(grid[i + 3] && grid[i + 3][j + 3]) {
    if (grid[i][j] == 'X' && grid[i + 1][j + 1] == 'M' && grid[i + 2][j + 2] == 'A' && grid[i + 3][j + 3] == 'S') {
      count++
    }
  }
  //checking down left
  if(grid[i + 3] && grid[i + 3][j - 3]) {
    if (grid[i][j] == 'X' && grid[i + 1][j - 1] == 'M' && grid[i + 2][j - 2] == 'A' && grid[i + 3][j - 3] == 'S') {
      count++
    }
  }
  //checking up right
  if(grid[i - 3] && grid[i - 3][j + 3]) {
    if (grid[i][j] == 'X' && grid[i - 1][j + 1] == 'M' && grid[i - 2][j + 2] == 'A' && grid[i - 3][j + 3] == 'S') {
      count++
    }
  }
  //checking up left
  if(grid[i - 3] && grid[i - 3][j - 3]) {
    if (grid[i][j] == 'X' && grid[i - 1][j - 1] == 'M' && grid[i - 2][j - 2] == 'A' && grid[i - 3][j - 3] == 'S') {
      count++
    }
  }
  return count
}
