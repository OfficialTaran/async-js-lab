import { promiseMultiply } from "../multiply.js"

let value = 2

value = await promiseMultiply(value,3)
console.log(value)
value = await promiseMultiply(value,3)
console.log(value)
value = await promiseMultiply(value,3)
console.log(value)