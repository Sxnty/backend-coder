/**
 * @es11
 * @nullish
 */

let zero = 0;
let nulo = null;
let notDefined = undefined;

console.log(zero, nulo, notDefined);

zero = zero ?? "is null or undefined";
nulo = nulo ?? "is null or undefined";
notDefined = notDefined ?? { type: "is null or undefined" };

console.log(zero, nulo, notDefined);
