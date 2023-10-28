let data = [5,2,9,8,4];

let minValue = data.reduce((a, b) => Math.min(a,b));
console.log(minValue)

let summary = data.reduce((a,b) => a + b);
console.log(summary)