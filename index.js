const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.post('/calculator/rest/squareroot', (req, res) => {
    const x = req.body.x
    res.json({x: x, result: Math.sqrt(x)})
})

app.post('/calculator/rest/cmtoinch', (req, res) => {
    const x = req.body.x
    res.json({x: x, result: x / 2.54})
})

app.post('/calculator/rest/kbtotb', (req, res) => {
    const x = req.body.x
    res.json({x: x, result: x * Math.pow(10, -9)})
})


app.listen(port)