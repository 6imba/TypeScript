// // # 1:
// class Person{
//     property_1:string;
//     property_2:number;
// }
// const person_1 = new Person();
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// person_1.property_1 = "Amir Shrestha";
// person_1.property_2 = 22;
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// // # 2:
// class Person{
//     property_1:string;
//     property_2:number;
//     // property_3:string;
//     constructor(){
//         this.property_3 = "Homo sapiens";
//     }
// }
// const person_1 = new Person();
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// person_1.property_1 = "Amir Shrestha";
// person_1.property_2 = 22;
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// // # 3:
// class Person{
//     property_1:string;
//     property_2:number;
//     property_3:string;
//     // property_4:boolean;
//     constructor(para_1:boolean){
//         this.property_3 = "Homo sapiens";
//         this.property_4 = para_1;
//     }
// }
// const person_1 = new Person(true);
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// console.log(person_1.property_4)
// person_1.property_1 = "Amir Shrestha";
// person_1.property_2 = 22;
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// console.log(person_1.property_4)
// // # 4:
// class Person{
//     property_1:string;
//     property_2:number;
//     property_3:string;
//     property_4:boolean;
//     constructor(para_1:boolean){
//         this.property_3 = "Homo sapiens";
//         this.property_4 = para_1;
//     }
//     method_1(){
//         console.log("I am methoed_1!");
//     }
//     method_2(){
//         return "I am methoed_1!";
//     }
// }
// console.log(Person)
// const person_1 = new Person(true);
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// console.log(person_1.property_4)
// console.log(person_1.method_1)
// console.log(person_1.method_2)
// person_1.method_1()
// person_1.method_2()
// person_1.property_1 = "Amir Shrestha";
// person_1.property_2 = 22;
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// console.log(person_1.property_4)
// console.log(person_1.method_1)
// console.log(person_1.method_2)
// person_1.method_1()
// person_1.method_2()
// // # 5:
// class Person{
//     property_1:string;
//     property_2:number;
//     property_3:string;
//     property_4:boolean;
//     constructor(para_1:boolean){
//         this.property_3 = "Homo sapiens";
//         this.property_4 = para_1;
//     }
//     method_1(): void{
//         console.log("I am methoed_1!");
//     }
//     method_2(): string{
//         return "I am methoed_2!";
//     }
// }
// console.log(Person)
// const person_1 = new Person(true);
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// console.log(person_1.property_4)
// console.log(person_1.method_1)
// console.log(person_1.method_2)
// console.log(person_1.method_1())
// console.log(person_1.method_2())
// person_1.method_1()
// person_1.method_2()
// person_1.property_1 = "Amir Shrestha";
// person_1.property_2 = 22;
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// console.log(person_1.property_4)
// console.log(person_1.method_1)
// console.log(person_1.method_2)
// console.log(person_1.method_1())
// console.log(person_1.method_2())
// person_1.method_1()
// person_1.method_2()
// # 5:
var Person = /** @class */ (function () {
    function Person(para_1) {
        this.property_3 = "Homo sapiens";
        this.property_4 = para_1;
    }
    Person.prototype.method_1 = function () {
        console.log("I am methoed_1!");
    };
    Person.prototype.method_2 = function () {
        return "I am methoed_2!";
    };
    return Person;
}());
console.log(Person);
var person_1 = new Person(true);
