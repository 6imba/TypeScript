// intersection type ==> & can give variable many custome type.

type Hulk = {
    body: string
}
type SuperWoman = {
    fly: boolean
}
type SuperBaby = Hulk & SuperWoman;

let baby1:SuperBaby = {
    body: "Strong",
    fly:true
}
console.log(baby1)