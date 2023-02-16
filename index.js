const express = require("express");
require("dotenv").config()

const port = process.env.port

const app = express()

app.get("/", (req, res) => {
    res.send("This is the homepage")
});

app.get("/about", (req, res) => {
    res.send("About page")
})

app.get("/Contact", (req, res) => {
    res.send("WhatsApp, twitter, instagram")
})

app.get("/faqpage", (req, res) => {
    res.send("1. Is this life?, 2.How do I debug, 3.Is this playing?")
})

app.get("/location", (req, res) => {
    res.send("Ontario Canada")
})

app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})
