let str1 = "apple";
let str2;
console.log(str1.length);
// console.log(str2.length);

(<string>str2).length; // type assertion
(str2 as string).length; // type assertion

