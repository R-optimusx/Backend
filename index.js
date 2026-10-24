require('dotenv').config()

const express = require("express")

const app = express()


app.get('/',(req,res) => {
    res.send("hello rahul")
})

app.get('/sarita',(req,res) => {
    res.send("where are Rahul ? , Sarita is here ")
})

app.listen(process.env.PORT,() => {
    console.log(`hello rahul from port ${process.env.PORT}`)
})