// // # Plain JS function:
    // // # Named function:
    // function myFunc(name, age){
    //         console.log(name);
    //     }
    // myFunc("Amir", 22)

    // // # Anonomous Arrow function expression:
    // let myFunc = (name, age) => {
    //         console.log(name);
    //     }
    //     myFunc("Amir", 22)
    
    
    
// # TypeScript function: with no_parameter no_return-type.
    // # Named function:
    // function myFunc1():void{
    //     console.log("I am function with no parameter and no return type.");
    // } 
    // myFunc1()

    // // # Anonomous Arrow function expression:
    // const myFunc1 = ():void => {
    //     console.log("I am function with no parameter and no return type.");
    // } 
    // myFunc1()

// ------------------------------------------------------------------------------------------------------------------------------

// // # TypeScript function: with parameter no_return-type.
//     let myFunc2 = (name:string, age:number):void => {
//         console.log(`${name} is ${age} years old.`);
//     } 
//     myFunc2("Amir", 22)


// // # TypeScript function: with parameter return-type.
//     let myFunc3 = (name:string, age:number):string => {
//         return `${name} is ${age} years old.`;
//     } 
//     const result = myFunc3("Amir", 22)
//     console.log(result)

// // # TypeScript function: with no return-type mentioned.
// // Incase, you don't mention return-type typescript-complier will assign its return-type implicitly.
// // hover mouse cursor over myFunc4 function identifier. (See: let myFunc4: () => void)
//     let myFunc4 = () => {
//         console.log("TypeScript function with parameter return-type mentioned.")
//     } 
//     myFunc4()

// // # TypeScript function: with no return-type mentioned.
// // Incase, you don't mention return-type typescript-complier will assign its return-type implicitly.
// // hover mouse cursor over myFunc5 function identifier. (See: let myFunc5: () => string)
//     let myFunc5 = () => { 
//         return "TypeScript function with parameter return-type mentioned."
//     } 
//     console.log(myFunc5())

// // # TypeScript function: with no return-type mentioned.
// // Incase, you don't mention return-type typescript-complier will assign its return-type implicitly.
// // hover mouse cursor over myFunc5 function identifier. (See: let myFunc6: () => number)
//     let myFunc6 = () => { 
//         return 10000
//     } 
//     console.log(myFunc6())


// // # TypeScript function: with no parameter type.
//     let myFunc7 = (name,age):void => {
//         console.log(`${name} is ${age} years old.`);
//     } 
//     myFunc7("Amir", 22)
    // // Incase, you don't mention type of function parameter, typescript-complier will assign any type to parameter implicitly.
    // // hover mouse cursor over parameter name,age. (See: (parameter) name: any && (parameter) age: any)

// ------------------------------------------------------------------------------------------------------------------------------

// // # TypeScript function: with parameter and optional_parameter no_return-type.
//     let myFunc2 = (name:string, age?:number):void => {
    //         console.log(`${name} is years old.`);
    //     } 
    //     myFunc2("Amir")
    
// ------------------------------------------------------------------------------------------------------------------------------

// // # TypeScript function: with parameter and default_parameter no_return-type.
//     let myFunc2 = (name:string, age:number = 22):void => {
//             console.log(`${name} is ${age} years old.`);
//         } 
//         myFunc2("Amir")
    
// ------------------------------------------------------------------------------------------------------------------------------

