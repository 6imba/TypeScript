// interface allow us to enforce a certain structure(property,methods,return_type) of a class or object.
// object/class implementing interface must have all mentioned/declared properties&methods or else make itself abstract.
// object/class implementing interface cannot have extra expilcite properties/method.
// we don't generate/initialize object of interface, instead we make class inherit interface.
// Class implementing interface:
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Amir Shrestha";
        this.age = 22;
        this.scientific_name = "Homo sapiens";
    }
    Person.prototype.prove = function () {
        console.log("I am Human.");
    };
    Person.prototype.okay = function () {
        return "yes";
    };
    return Person;
}());
console.log(Person);
var person_1 = new Person();
console.log(person_1);
console.log(person_1.name);
console.log(person_1.age);
console.log(person_1.scientific_name);
person_1.prove();
console.log(person_1.okay());
