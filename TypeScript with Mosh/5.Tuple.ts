// Tuple is a fix length array where each element have particular type.
// We use tuple when we work with pair of value. => 'Amir Shrestha',22,true



const person: [number,string,boolean] = [22,'Amir',true]
console.log(person)
console.log(typeof(person))

// person[0]. // ==> here person[0] is a Number object and we get all pre-defined methods&property (toExponential,toFixed,toLocaleString,so-on..) when we use . operator on it.
// person[1]. // ==> here person[0] is a String object and we get all pre-defined methods&property (charAt,lastIndexOf,concat,so-on.....) when we use . operator on it.
// person[2]. // ==> here person[0] is a Boolean object and we get all pre-defined methods&property (valueOf) when we use . operator on it.



// When we compile/transpile the TypeScript tuple we get JavaScript array, that enable us to use push method on that array.
// which is not what we want for tuple. So hope this issue will be solved in next version of TypeScript.



// Note use tuple for couple value only:
const student: [string,number] = ['Amir Shrestha',22]