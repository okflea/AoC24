"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const filePath = 'input.txt';
try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.trim().split('\n').map(line => line.trim());
    const grid = lines.map(line => line.split(''));
    console.log("A");
    console.log(countXmas(grid));
}
catch (err) {
    console.error('Error reading file:', err);
}
function countXmas(grid) {
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
function checkForXmasHorizontally(grid, i, j) {
    if (i < 0 || i > grid.length || j < 0 || j > grid[i].length)
        return 0;
    let count = 0;
    //checking forward 
    if (grid[i][j + 3]) {
        if (grid[i][j] == 'X' && grid[i][j + 1] == 'M' && grid[i][j + 2] == 'A' && grid[i][j + 3] == 'S') {
            count++;
        }
    }
    //checking backward
    if (grid[i][j - 3]) {
        if (grid[i][j] == 'X' && grid[i][j - 1] == 'M' && grid[i][j - 2] == 'A' && grid[i][j - 3] == 'S') {
            count++;
        }
    }
    return count;
}
function checkForXmasVertically(grid, i, j) {
    if (i < 0 || i > grid.length || j < 0 || j > grid[i].length)
        return 0;
    let count = 0;
    //checking down
    if (grid[i + 3]) {
        if (grid[i][j] == 'X' && grid[i + 1][j] == 'M' && grid[i + 2][j] == 'A' && grid[i + 3][j] == 'S') {
            count++;
        }
    }
    //checking up
    if (grid[i - 3]) {
        if (grid[i][j] == 'X' && grid[i - 1][j] == 'M' && grid[i - 2][j] == 'A' && grid[i - 3][j] == 'S') {
            count++;
        }
    }
    return count;
}
function checkForXmasDiagonally(grid, i, j) {
    if (i < 0 || i > grid.length || j < 0 || j > grid[i].length)
        return 0;
    let count = 0;
    //checking down right
    if (grid[i + 3] && grid[i + 3][j + 3]) {
        if (grid[i][j] == 'X' && grid[i + 1][j + 1] == 'M' && grid[i + 2][j + 2] == 'A' && grid[i + 3][j + 3] == 'S') {
            count++;
        }
    }
    //checking down left
    if (grid[i + 3] && grid[i + 3][j - 3]) {
        if (grid[i][j] == 'X' && grid[i + 1][j - 1] == 'M' && grid[i + 2][j - 2] == 'A' && grid[i + 3][j - 3] == 'S') {
            count++;
        }
    }
    //checking up right
    if (grid[i - 3] && grid[i - 3][j + 3]) {
        if (grid[i][j] == 'X' && grid[i - 1][j + 1] == 'M' && grid[i - 2][j + 2] == 'A' && grid[i - 3][j + 3] == 'S') {
            count++;
        }
    }
    //checking up left
    if (grid[i - 3] && grid[i - 3][j - 3]) {
        if (grid[i][j] == 'X' && grid[i - 1][j - 1] == 'M' && grid[i - 2][j - 2] == 'A' && grid[i - 3][j - 3] == 'S') {
            count++;
        }
    }
    return count;
}
