// with union type ==> | we can given variable more than one type.
// with union type we can given variable one of many type.

function gmToKg(weight: number|string): number {
    if(typeof(weight)==='string'){ //union narrowing technique
        return parseInt(weight)/100
    }
    return weight/100
}
let x1 = gmToKg(10)
console.log(x1)
let x2 = gmToKg('10')
console.log(x2)

