import { promiseMultiply } from "../multiply.js"

const a = promiseMultiply(2,3)
const b = promiseMultiply(4,5)
const c = promiseMultiply(5,7)

const results = await Promise.all([a,b,c])

console.log(`result of a: ${results[0]}`)
console.log(`result of b: ${results[1]}`)
console.log(`result of c: ${results[2]}`)
