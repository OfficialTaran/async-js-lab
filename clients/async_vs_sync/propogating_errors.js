import { promiseMultiply } from "../multiply.js"

// whenever we have 'await' in a function. we must add async
const asyncFunction = async (x, y, z) => {
  try {
    const result = await promiseMultiply(x,y)
    return result / z
  } catch (error) {
    throw new Error('the promiseMultiply function rejected')
  }

}

const syncFunction = (x, y, z) => promiseMultiply(x,y).then( result => result / z )

const synchronousResults = await syncFunction(4, 5, 2).catch(error => {
  console.error(error)
  return 4 * 5 / 2
})
const asynchronousResults = await asyncFunction(4, 5, 2).catch(error => {
  console.error(error)
  return 4 * 5 / 2
})

console.log(synchronousResults)
console.log(asynchronousResults)