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
    const mulFunctions = extractMulFunctions(data);
    console.log(mulFunctions.length);
    let sum = 0;
    for (let mul of mulFunctions) {
        const [num1, num2] = mul.substring(4, mul.length - 1).split(',').map(Number);
        sum += num1 * num2;
    }
    console.log("A");
    console.log(sum);
    //NOTE: B
    // const directives = ['do()', "don't()" ];
    // const directiveIndices = extractDirectiveIndices(data, directives);
    // console.log(directiveIndices);
    console.log("B");
    console.log(data
        .split('do()')
        .map(segment => segment.split("don't()")[0])
        .flatMap(segment => {
        const matches = segment.matchAll(/mul\((\d+),(\d+)\)/g);
        return [...matches];
    })
        .reduce((sum, match) => {
        // console.log(match);
        const [_, num1, num2] = match;
        return sum + parseInt(num1) * parseInt(num2);
    }, 0));
    //alter data to remove substrings 
    // let newData = "";
    // for(let dontIdx of directiveIndices["don't()"]){
    //
    // }
}
catch (err) {
    console.error('Error reading file:', err);
}
function extractMulFunctions(inputString) {
    try {
        const validMulFunctions = [];
        // const regex = /(?<![a-zA-Z0-9_@#$%^&*()[\]{}])mul\((\d+(?:\.\d+)?),(\d+(?:\.\d+)?)\)/g;
        // const regex = /mul\((\d+(?:\.\d+)?),(\d+(?:\.\d+)?)\)/g;
        const regex = /mul\((\d+),(\d+)\)/g;
        let match;
        while ((match = regex.exec(inputString)) !== null) {
            // console.log(match[0]);
            const fullMatch = match[0];
            validMulFunctions.push(fullMatch);
        }
        // console.log(match);
        return validMulFunctions;
    }
    catch (err) {
        console.error('Error in extractMulFunctions:', err);
        return [];
    }
}
function extractDirectiveIndices(inputString, directives) {
    const result = {};
    directives.forEach(substring => {
        const indices = [];
        let index = 0;
        while (index < inputString.length) {
            index = inputString.indexOf(substring, index);
            if (index === -1) {
                break;
            }
            indices.push(index);
            index += substring.length;
        }
        result[substring] = indices;
    });
    return result;
}
// function extractMulFunctions(inputString: string): string[] {
//   const validMulFunctions: string[] = [];
//   const regex = /mul\(([\d.]+),([\d.]+)\)/g;
//   let match;
//
//   while ((match = regex.exec(inputString)) !== null) {
//     validMulFunctions.push(match[0]);
//   }
//
//   return validMulFunctions;
// }
// function extractMulFunctions(inputString: string): string[] {
//   const validMulFunctions: string[] = [];
//   let i = 0;
//
//   while (i < inputString.length) {
//     // Skip invalid characters
//     while (i < inputString.length && !isAlphaNumeric(inputString[i])) {
//       i++;
//     }
//
//     // Check for "mul("
//     if (i + 3 < inputString.length && inputString.slice(i, i + 3) === 'mul(') {
//       let j = i + 3;
//       let num1 = '';
//       let num2 = '';
//       let openParenCount = 1;
//
//       while (j < inputString.length) {
//         const char = inputString[j];
//         if (char === '(') {
//           openParenCount++;
//         } else if (char === ')') {
//           openParenCount--;
//           if (openParenCount === 0) {
//             break;
//           }
//         } else if (char === ',' && openParenCount === 1) {
//           num2 = inputString.slice(j + 1);
//           break;
//         } else if (openParenCount === 1) {
//           num1 += char;
//         }
//         j++;
//       }
//
//       if (num1.length > 0 && num2.length > 0 && !isNaN(Number(num1)) && !isNaN(Number(num2))) {
//         validMulFunctions.push(`mul(${num1}, ${num2})`);
//       }
//       i = j;
//     } else {
//       i++;
//     }
//   }
//
//   return validMulFunctions;
// }
// function isAlphaNumeric(char: string): boolean {
//   return /^[a-zA-Z0-9]$/.test(char);
// }
