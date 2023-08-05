// In js objects are dynamic: you can add new property to object in javascript.

// // But in ts you cannot add new property to object.
// let employee = {id:1,name:"Amir Shrestha"}
// employee.age = 22

// // We can add type annotation in typescript object as in other variables:
// let employee:{id:number, name:string} = {id:1,name:"Amir Shrestha"}

// // We should assign property at the time of object initializtion incase of  type annotated object, else error is shown ==> Property 'name' is missing in type but required in type.
// let employee1:{id:number, name:string} = {id:1}
// //Solution:
// let employee2:{id:number, name:string} = {id:1,name:''}//initial epmty value
// let employee3:{id:number, name?:string} = {id:1} //make property optional

// //readonly modifier in ts_object:
// let employee:{ readonly id:number, name:string} = {id:1,name:"Amir Shrestha"}
// console.log(employee.id)
// employee.id = 2 //Cannot assign to 'id' because it is a read-only property.

// // objet method:
// let employee:{ 
//         readonly id:number,
//         name:string
//         bio: (age:number,role:string) => void
//     }
//     =
//     {
//         id:1,
//         name:"Amir Shrestha",
//         bio: (age:number,role:string) => {
//             console.log(`${role}, is ${age} years old.`)
//         }
//     }
// employee.bio(22, 'Fullstack Developer')

