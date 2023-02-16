const express = require("express");
require("dotenv").config()

const port = process.env.port

const app = express()

app.get("/", (req, res) => {
    res.send("This is the homepage")
})

app.get("/faqpage", (req, res) => {
    res.send("1. Kileleyi?, 2.How do i debug, 3.Is this playing?")
})

app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})