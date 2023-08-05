// // object:
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

// # Problem with above ts object implementation:
    // 1. If we need to create another employee object, we have to repeat object annotation structure. (No dry"dont repeat yourself" maintained)
    // 2. Other employee object may have other property as well.
    // 3. Hard to read and write
// # Solution:
    // > Type aliases

// // object aliases to type:
// type Employee = { 
//     readonly id:number,
//     name:string
//     bio: (age:number,role:string) => void
// }
// let employee:Employee = {
//     id:1,
//     name:"Amir Shrestha",
//     bio: (age:number,role:string) => {
//         console.log(`${role}, is ${age} years old.`)
//     }
// }
// employee.bio(22, 'Fullstack Developer')



// object aliases to type:
// # custome type.
type Employee = { 
    readonly id:number,
    name:string
    bio: (age:number,role:string) => void
}

let employee1:Employee = {
    id:1,
    name:"Amir Shrestha",
    bio: (age:number,role:string) => {
        console.log(`${role}, is ${age} years old.`)
    }
}
employee1.bio(22, 'Fullstack Developer')

let employee2:Employee = {
    id:2,
    name:"Lina Shrestha",
    bio: function (age:number,role:string){
            console.log(`${role}, ${this.name} is ${age} years old.`)
         }
}
employee2.bio(22, 'Quality Assurance')

// # Object,Class methods should not be arrow_function as we dont have this keyword inside them.

