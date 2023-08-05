// // # JS array:
// const jsArr = [1,'c',true]
// console.log(jsArr)

// JS array can have element of multiple types whereas TS array can have element of single type.
// JS array are dynamic and TS array are static.

// # String array:
let arrStr:string[];
arrStr = ['apple','ball','cat']
console.log(arrStr)



// // # Number array:
// let arrNumb:number[];
// arrNumb = [1,2,3,4,5]
// console.log(arrNumb)



// let arrNumbErr:number[];
// arrNumb = ['1','2','3','4','5'] //Type 'string' is not assignable to type 'number'.
// console.log(arrNumbErr)



// let arrStrErr:string[];
// arrStrErr = [1,2,3,4,5,6] //Type 'number' is not assignable to type 'string'.
// console.log(arrStrErr)



// // TypeScript-compiler implicit araay type annotation: (hover array identifier to see)
// const arr1 = [1,2,3,4,5] // const arr1: number[]
// const arr2 = ['a','b','c','d','e'] // const arr2: string[]
// const arr3 = [] // const arr3: never[]



// // // implicit never type: array with element of any type.
// const arr4 = [] //hover to see ==> const arr3: never[]
// arr4[0] = 100;
// arr4[1] = "ball";
// arr4[2] = true;
// console.log(arr4)



// // // explicit never type: array with element of any type.
// const arr5:never = [] //Type 'never[]' is not assignable to type 'never'.ts(2322)
// arr5[0] = 100;
// arr5[1] = "ball";
// arr5[2] = true;
// console.log(arr5)



// // // explicit never type: array with element of any type.
// const arr6:any = [] //Type 'never[]' is not assignable to type 'never'.ts(2322)
// arr6[0] = 100;
// arr6[1] = "ball";
// arr6[2] = true;
// console.log(arr6)