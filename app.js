const express = require('express')
const app = express()
const port = 3000

const func = require('./functions')

app.get('/', (req, res) => {
    const result = func.add(1, 1)
    res.send(`Hello 1 + 1 = ${result}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})