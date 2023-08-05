// when working with nullable object 

// // # 1:
// // # Define type alias CustomerInfoDB, repl database
// type CustomerInfoDB = {
//     name: string,
//     birthday: Date
// }
// // # Define function to get data from DatabASE.
// function getCustomerInfo(id:number): CustomerInfoDB|null {
//     return id!=0 ? {name:"Homo Sapiens", birthday: new Date()} : null
// }

// //# Initialize object with type CustomerInfoDB 
// let customer_1 = getCustomerInfo(0)
// if(customer_1 !== null){
//     console.log(customer_1.birthday)
// }else{
//     console.log("No customer found!")
// }



// // # 2:
// // # Define type alias CustomerInfoDB, repl database
// type CustomerInfoDB = {
//     name: string,
//     birthday: Date
// }
// // # Define function to get data from DatabASE.
// function getCustomerInfo(id:number): CustomerInfoDB|null|undefined {
//     return id!=0 ? {name:"Homo Sapiens", birthday: new Date()} : null
// }

// //# Initialize object with type CustomerInfoDB 
// let customer_1 = getCustomerInfo(0)
// if(customer_1 !== null && customer_1 !== undefined){
//     console.log(customer_1.birthday)
// }else{
//     console.log("No customer found!")
// }



// // # 3:
// type CustomerInfoDB = {
//     name: string,
//     birthday: Date
// }
// function getCustomerInfo(id:number): CustomerInfoDB|null|undefined {
//     return id!==0 ? {name:"Homo Sapiens", birthday: new Date()} : null
// }

// let customer_1 = getCustomerInfo(0)
// console.log(customer_1?.birthday) //// # Optional property access operator:
// let customer_2 = getCustomerInfo(2)
// console.log(customer_2?.birthday) //// # Optional property access operator:



// // # 4:
// type CustomerInfoDB = {
//     name: string,
//     birthday: Date
// }
// function getCustomerInfo(id:number): CustomerInfoDB|null|undefined {
//     return id!=0 ? {name:"Homo Sapiens", birthday: new Date()} : null
// }

// let customer_1 = getCustomerInfo(0)
// // console.log(customer_1) 
// // // console.log(customer_1.birthday)
// // console.log(customer_1?.birthday) //// # Optional property access operator:
// // console.log(customer_1?.birthday.getFullYear) //// # Optional property access operator:
// console.log(customer_1?.birthday?.getFullYear) //// # Optional property access operator:



// # 5:
type CustomerInfoDB = {
    name: string,
    birthday: Date
}
function getCustomerInfo(id:number): CustomerInfoDB|null|undefined {
    return id!=0 ? {name:"Homo Sapiens", birthday: new Date()} : null
}

let customer_1 = getCustomerInfo(6)
console.log(customer_1?.birthday.getFullYear) //// # Optional property access operator:
console.log(customer_1?.birthday.getFullYear()) //// # Optional property access operator:
