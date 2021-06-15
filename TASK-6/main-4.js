// 4) WAP in js to Merge Two Arrays and Remove Duplicate Items.

let arr1 = [1, 2, 3,4,5];
let arr2 = [4,5,6,7,8,9,10];

let MergedArray = [].concat(arr1,arr2);
let UpdatedArray = new Set(MergedArray);
let newArray = Array.from(UpdatedArray);
console.log("MergedArray" ,MergedArray);
// console.log(UpdatedArray);
console.log("-------------------");
console.log("newArray" ,newArray);
document.write(
  "Question-4) WAP in js to Merge Two Arrays and Remove Duplicate Items."
);
