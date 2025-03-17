const express = require('express')
const dbConnection = require('./mongodb')

const app = express()

app.use(express.json())

app.get('/', async (req, resp) => {
    let data = await dbConnection()
    data = await data.find().toArray()

    resp.send(data)
})

app.post('/', async (req, resp) => {

    let data = await dbConnection()
    let result = await data.insertOne(req.body)
    resp.send(req.body)
})


app.put('/:name', async (req, resp) => {
    let data = await dbConnection()
    let result = await data.updateOne({ name: req.params.name }, { $set: req.body })
    resp.send(req.body)
})



app.listen(5000)
