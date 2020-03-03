const express = require("express")
const server = express()
const port = 4000
server.use(express.json())
const welcome = require("./welcome-router")
const cars = require("./cars-router")

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong"
    })
})

server.use("/", welcome)
server.use("/cars", cars)

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})