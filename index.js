require('dotenv').config()
const express = require('express')

const server = express()
server.use(express.json())

const port = process.env.PORT || 3000

server.get("/", (req,res) => {
    const users = [
        {
            id: 1,
            name: "Aomine daiki"
        },
        {
            id: 2,
            name: "Kagami Taiga"
        },
        {
            id: 3,
            name: "Migumi fushiguro"
        }
    ]

    res.status(200).json(users)
})

server.listen(port, () => {
    console.log(`API Running on port ${port}`)
})