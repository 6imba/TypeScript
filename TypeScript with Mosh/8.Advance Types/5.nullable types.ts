// function greet(name:string){
//     console.log(`Namaste, ${name.toUpperCase()}`)
// }

// greet("Amir")
// greet(null) // avoid it by mutating tsconfig.json, strictNullChecks: false
// greet(undefined) // avoid it by mutating tsconfig.json, strictNullChecks: false

// OR

function greet(name:string | null | undefined){
    if(name){
        console.log(`Namaste, ${name.toUpperCase()}`)
    }
    else{
        console.log('Good morning!')
    }
}
greet(null)
greet(undefined)
// Therefore, in order to pass null or undefined type as a parameter use union | operator.
