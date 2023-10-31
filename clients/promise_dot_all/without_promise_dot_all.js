import { promiseMultiply } from "../multiply.js"

const a = await promiseMultiply(2,3)
const b = await promiseMultiply(4,5)
const c = await promiseMultiply(5,7)

console.log(`result of a: ${a}`)
console.log(`result of b: ${b}`)
console.log(`result of c: ${c}`)