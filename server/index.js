import express from 'express'
import cluster from 'cluster'
import { cpus } from 'os'

if (cluster.isPrimary) {
  const cpuCount = cpus().length
  for (let i = 0; i < cpuCount; i++) {
      cluster.fork()
  }
}
else {

  const port = process.env.PORT || 80
  const app = express()
  app.use(express.json())

  app.post('/', async (req,res) => {
    console.log(req.body)
    await new Promise(r => setTimeout(r, 2000))
    res.json({result: req.body.x * req.body.y})
  })

  app.listen(port, function () {
    console.log("Server has started on port: ", port);
  });

}

cluster.on('exit', (worker) => {
  cluster.fork()
})

cluster.on