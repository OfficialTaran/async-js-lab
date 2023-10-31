const callbackMultiply = (x, y, callback) => {
  fetch('http://127.0.0.1:80', {
    method: 'POST',
    body: JSON.stringify({x, y}),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
  .then(res => {
      callback(res.result,null);        
  }).catch(err => callback(null,err))
}

const promiseMultiply = (x,y) => {
  return fetch('http://127.0.0.1:80', {
    method: 'POST',
    body: JSON.stringify({x, y}),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
  .then(res => res.result)
}

export { callbackMultiply, promiseMultiply }