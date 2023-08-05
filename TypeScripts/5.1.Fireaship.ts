// Reference: https://www.youtube.com/watch?v=ahCwqrYpIuM

// By default typescript is complied into ES3.
// WKT, ES3 do not have support for async-await.
// So lets see what happens when we try to compile typescript with async-await into javascript.

async function hello() {
    return "Async-await."
}

// you can see that our TS gets transpile into crazy looking long JS code, so that we can use async-await feature in ES3.

// Here our typescript compiler is very sophisticated.
// So, you have different options that you can pass to it to customize it behavior.
// You can customize the behavior of TypeScript-compiler, by passing required options via cmd.
// but standard and convient way is passing required options as JSON via tsconfig.json file.
// where tsconfig.json file gets picked up automatically when you run tsc.

// tsconfig.json file:
// {
//     "compilerOptions": {
//         "target": "esnext",

//     }
// }
//    > target: it denotes the flavour of JS that your TS code will be compiled to.

// - Now try to compile the TS code with async-await.
// - You see the compiled JS code will have async-await without any crazy long JS code, as it's compiled into Latest JS flavour(esnext).

// Some of compiler options are:
//     > target: "JS_flavour" it denotes the flavour of JS that your TS code will be compiled to.
//     > watch: true ==> re-compile our file everytime we save the change.(that will save us from re-running tsc.cmd command after every change)
//     > lib: include typeIns for certain environment(DOM,ES2017,etc)_used_our_project.


// function return types: number,boolean,string,void(no return type with incase like event-listener,side-effect,etc that doesn't return value)

// array type ==> const arr:number[] = [1,2,3,4,5,6]
// arr.push[7]
// arr.push["eight"]

// array of object ==> const arr: PersonInterface[] = []
// interface to give the exact shape to the object.

// Tuple ==> fix length array with given type.

// make parameter optional ==> ?

// TypeScript generics: create and use typeScript generics.


