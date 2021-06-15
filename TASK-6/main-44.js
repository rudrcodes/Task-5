// 4) WAP in js to Merge Two Arrays and Remove Duplicate Items.

let arr1 = [1,2,3];
let arr2 = [4,2,3,5];

let MergedArray =[...arr1,...arr2];
let UpdatedArray= new Set(MergedArray);
let newArray=Array.from(UpdatedArray);
// let newArray = [...UpdatedArray]
// let MergedArray =arr1.concat(arr2);
// let MergedArray =[].concat(arr1,arr2);
// let UpdatedArray=[];
console.log(MergedArray);
// console.log("MergedArray");
console.log(UpdatedArray);
console.log(newArray);
// console.log(MergedArray.length);
// console.log(MergedArray.sort());
// for(let i=0;i<MergedArray.length;i++)
// for(let i in MergedArray)
// { 
//    if(MergedArray[i]!=MergedArray[i+1])
//     UpdatedArray.push(MergedArray[i]);
// }
// console.log("This is updated:-",UpdatedArray);
// console.log(MergedArray[3]);