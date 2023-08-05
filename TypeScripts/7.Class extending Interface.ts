// interface allow us to enforce a certain structure(property,methods,return_type) of a class or object.
// object/class implementing interface must have all mentioned/declared properties&methods or else make itself abstract.
// object/class implementing interface cannot have extra expilcite properties/method.
// we don't generate/initialize object of interface, instead we make class inherit interface.

// Interface defination:
interface IsPerson{
    name: string;
    age: number;
    prove(): void;
    okay(): string;
}

// Class implementing interface:
class Person implements IsPerson{
    name: string;
    age: number;
    caste?: string;
    readonly SSN: number;
    scientific_name: string;

    constructor(){
        this.name = "Amir Shrestha";
        this.age = 22;
        this.scientific_name = "Homo sapiens";
    }
    prove():void{
        console.log("I am Human.")
    }
    okay():string{
        return "yes"
    }
}
console.log(Person)
const person_1 = new Person();
console.log(person_1)
console.log(person_1.name)
console.log(person_1.age)
console.log(person_1.scientific_name)
person_1.prove()
console.log(person_1.okay())


