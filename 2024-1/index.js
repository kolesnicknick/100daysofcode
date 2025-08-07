const fs = require('fs');

// Read the file content
const data = fs.readFileSync('input', 'utf-8');

// Split lines and parse into two arrays
const lines = data.trim().split('\n');
const left = [];
const right = [];

lines.forEach(line => {
    const [first, second] = line.trim().split(/\s+/).map(Number);
    left.push(first);
    right.push(second);
});

left.sort();
right.sort();

let sum = 0;

for(let i = 0; i < left.length; i++){
    sum += Math.abs(left[i] - right[i]);
}

console.log('Array 1:', left);
console.log('Array 2:', right);

console.log('sum:', sum)