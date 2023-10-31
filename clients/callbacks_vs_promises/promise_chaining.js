import { promiseMultiply } from "../multiply.js"

const value = await promiseMultiply(2,3)
  .then(res => promiseMultiply(res,3))
  .then(res => promiseMultiply(res,3))

console.log(value)