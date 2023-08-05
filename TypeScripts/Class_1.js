// // # 1:
// class Person{
//     property_1;
//     property_2;
// }
// const person_1 = new Person();
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// person_1.property_1 = "Amir"
// person_1.property_2 = 22
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)

// // # 2:
// class Person{
//     property_1;
//     property_2;
//     constructor(para_1){
//         this.property_3 = "Nepali";
//         this.property_4 = para_1;
//     }
// }
// const person_1 = new Person(8848);
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// console.log(person_1.property_4)
// person_1.property_1 = "Amir"
// person_1.property_2 = 22
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// console.log(person_1.property_4)


// // # 3:
// class Person{
//     property_1;
//     property_2;
//     constructor(para_1){
//         this.property_3 = "Nepali";
//         this.property_4 = para_1;
//         const property_5 = "five"
//     }
// }
// console.log(Person)
// const person_1 = new Person(8848);
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// console.log(person_1.property_4)
// console.log(person_1.property_5)
// // console.log(property_5)
// console.log(Person.property_5)
// person_1.property_1 = "Amir"
// person_1.property_2 = 22
// console.log(person_1)
// console.log(person_1.property_1)
// console.log(person_1.property_2)
// console.log(person_1.property_3)
// console.log(person_1.property_4)
// console.log(person_1.property_5)
// // console.log(property_5)
// console.log(Person.property_5)

// # 4:
class Person{
    property_1;
    property_2;
    constructor(para_1){
        this.property_3 = "Nepali";
        this.property_4 = para_1;
        const property_5 = "five"
    }
    methods_1(){
        console.log("I am method_1.")
    }
    methods_2 = () => console.log("I am method_2.")
    // methods_3: function (){ console.log("I am method_2.")} // method in object literals
    // const methods_4 = function (){ console.log("I am method_2.")} // function expression 

}
console.log(Person)
const person_1 = new Person(8848);
console.log(person_1)
console.log(person_1.property_1)
console.log(person_1.property_2)
console.log(person_1.property_3)
console.log(person_1.property_4)
console.log(person_1.property_5)
// console.log(property_5)
console.log(Person.property_5)
console.log(person_1.methods_1)
person_1.methods_1()
console.log(person_1.methods_1())
person_1.methods_2()
person_1.property_1 = "Amir"
person_1.property_2 = 22
console.log(person_1)
console.log(person_1.property_1)
console.log(person_1.property_2)
console.log(person_1.property_3)
console.log(person_1.property_4)
console.log(person_1.property_5)
// console.log(property_5)
console.log(Person.property_5)
