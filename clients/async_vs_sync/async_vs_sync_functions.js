import { promiseMultiply } from "../multiply.js"

// whenever we have 'await' in a function. we must add async
const asyncFunction = async (x, y, z) => {
  try {
    const result = await promiseMultiply(x,y)
    return result / 2
  } catch (error) {
    console.error(error)
    console.log('since the promise rejected we can multiply ourselves')
    return x * y / z
  }

}

const syncFunction = (x, y, z) => {
  return promiseMultiply(x,y)
    .then( result => result / 2 )
    .catch(err => {
      console.error(err)
      console.log('since the promise rejected we can multiply ourselves')
      return x * y / z
    })
}

const synchronousResults = await syncFunction(4,5,2)
const asynchronousResults = await asyncFunction(4,5,2)

console.log(synchronousResults)
console.log(asynchronousResults)