// # type in JS and TS:
    // javascript: number,string,boolean,null,undefined,object
    // typescript: extend js types, any, unknown, never, enum, tuple.

// # Primitive type in TypeScript:

    // # number:
    let age:number = 22
    let amount:number = 100_234_987

    // # string:
    let name:string = "Amir Shrestha"

    // # boolean:
    let is_alive:boolean = true;

    // # null:
    let cheat:null;

    // # undefined:
    let purpose:undefined;
    
    // # object:
    let life:object = {
        a:10,
        b:20,
        c:30,
    };

    // TypeScript compiler implicitly detect and determines the type of variable assigned with some value.
    let address1 = "Kapan" //hover mouse cursor over address1 variable identifier. (See: let address: string)
    
    // But if you don't assign any value rather just declare a variable it will defines its type to any.
    let address2 //hover mouse cursor over address2 variable identifier. (See: let address2: any)
    
    // Node implictly annotate variable with no type to any, which will show error.
    // to avoid showing that error ==> in tsconfig.json file ==> "noImplicitAny": true

    // # any:
    let task:any;
    task = 0;
    task="Hard"
    task=true
    // You see with type any you can assign any of the available data-type to a variable.
    // which makes purpose of using type script useless.
    // So always try to avoid any type if possible.(recommended)

export{};
