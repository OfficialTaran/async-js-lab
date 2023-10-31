import { callbackMultiply } from "../multiply.js";

callbackMultiply(2,3,(res, err) => {
  if (err) console.error(err)
  else {
    console.log(res)
  }
})