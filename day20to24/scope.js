'use strict'

var a = 1;
let b = 2;
const c = 3;

let funcScope = function(aa = 100, bb = 200, cc = 300){
    var a = aa;
    let b = bb;
    const c = cc;

    console.log(`Function scope: ${a}, ${b}, ${c}`);
};
funcScope();

funcScope(400, 500);

console.log(`Global scope: ${a}, ${b}, ${c}`);
funcScope();

funcScope(400, 500);


funcScope(400, 500, 600);

if (true) {
    var a = 777;
    let b = 333;
    const c = 444;

    console.log(`If scope: ${a}, ${b}, ${c}`);
}
console.log(`Global scope: ${a}, ${b}, ${c}`);

for (var a = 0; a < 10; a+=1){
    console.log(`For scope: ${a}`)
}
console.log(`Global scope: ${a}, ${b}, ${c}`);
