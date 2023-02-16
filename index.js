const express = require("express");
require("dotenv").config()

const port = process.env.port

const app = express()

app.get("/", (req, res) => {
    res.send("This is the homepage")
})

app.get("/location", (req, res) => {
    res.send("Lagos Nigeria")
})
app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})