// // constant size of Shoe:
// const Small = 4
// const Medium = 6
// const Large = 8



// // Enums represents list of related constant.
// enum ShoeSize {Small=4,Medium=6,Large=8} 
// // PascalCase



// enum ShoeSize1 {Small=4,Medium=6,Large=8} 
// console.log(ShoeSize1)



// enum ShoeSize2 {Small=2,Medium,Large}  // default increment
// console.log(ShoeSize2)



// enum ShoeSize3 {Small='1',Medium,Large}  // no default increment for string
// console.log(ShoeSize3)



// enum ShoeSize4 {Small='1',Medium='2',Large='3'}
// console.log(ShoeSize4)



// // # Program_1:
// enum ShoeSize5 {Small='6',Medium='6.5',Large='7'} 
// let mySize: ShoeSize5 = ShoeSize5.Medium
// console.log(mySize)



// # Program_2:
const enum ShoeSize6 {Small='6',Medium='6.5',Large='7'}
let mySize: ShoeSize6 = ShoeSize6.Medium
console.log(mySize)

// See the complie js of Program_1 and Program_2. ==> diff is const keyword.\
