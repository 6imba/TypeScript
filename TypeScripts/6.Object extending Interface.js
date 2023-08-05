// interface allow us to enforce a certain structure(property,methods,return_type) of a class or object.
// object/class implementing interface must have all mentioned/declared properties&methods or else make itself abstract.
// object/class implementing interface cannot have extra expilcite properties/method.
// we don't generate/initialize object of interface, instead we make class inherit interface.
// Object implementing interface:
var person_1 = {
    name: 'Amir Shrestha',
    age: 22,
    speak: function (bool, language) {
        console.log("".concat(bool, ", speaks ").concat(language));
    },
    spend: function (amount) {
        return 30000 - amount;
    }
};
console.log(person_1);
console.log(person_1.name);
console.log(person_1.age);
console.log(person_1.speak);
console.log(person_1.speak(true, "Nepali"));
console.log(person_1.spend);
console.log(person_1.spend(45000));
// Function:
var greetPerson = function (person) { return console.log("Namaste, Mr. ".concat(person.name, ".")); };
greetPerson(person_1);
