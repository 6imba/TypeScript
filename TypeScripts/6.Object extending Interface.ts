// interface allow us to enforce a certain structure(property,methods,return_type) of a class or object.
// object/class implementing interface must have all mentioned/declared properties&methods or else make itself abstract.
// object/class implementing interface cannot have extra expilcite properties/method.
// we don't generate/initialize object of interface, instead we make class inherit interface.


// Interface defination:
interface IsPerson{
    name: string;
    age: number;
    speak(bool: boolean, language: string): void;
    spend(amount: number): number;
    // func_1({name:string, age:number}):string
}

// Object implementing interface:
const person_1: IsPerson = {
    name: 'Amir Shrestha',
    age: 22,
    speak(bool: boolean, language: string): void{
        console.log(`${bool}, speaks ${language}`)
    },
    spend(amount: number): number{
        return 30000-amount;
    }
    // func_1: ({name:string, age:number}):string => return `${name} is ${age}.`
}

console.log(person_1)
console.log(person_1.name)
console.log(person_1.age)
console.log(person_1.speak)
console.log(person_1.speak(true,"Nepali"))
console.log(person_1.spend)
console.log(person_1.spend(45000))
// console.log(person_1.func_1({"Amir",22}))


// Function:
const greetPerson = (person:IsPerson) => console.log(`Namaste, Mr. ${person.name}.`)
greetPerson(person_1)
