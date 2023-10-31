import { promiseMultiply } from "../multiply.js"

const input_array = [
  {x: 5, y: 7},
  {x: 3, y: 4},
  {x: 5, y: 6},
  {x: 9, y: 3},
  {x: 8, y: 5},
  {x: 1, y: 7}
]

// mapping function
const multiply = (values) => promiseMultiply(values.x,values.y)

const output_array = await Promise.all(input_array.map(multiply))

console.log(output_array)