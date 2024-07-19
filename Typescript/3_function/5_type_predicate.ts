/**
 * Type Predicate
 */
function isNumber(input: any): input is number {
  return typeof input === "number";
}

console.log(isNumber(10));
console.log(isNumber("10"));
