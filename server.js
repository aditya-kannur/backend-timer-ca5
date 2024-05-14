const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const User = require('./Modal')
const cors = require('cors')

const app = express()
port = 3000
app.use(cors())

app.post('/data', async (req, res) => {
    try{
        const newUser = new User(req.body)
        await newUser.save()
        console.log(req.body)
        return res.status(201).json({'created' : req.body})
    }
    catch(error){
        console.log("error", error)
        return res.status(500).send("error")
    }
})


mongoose.connect(process.env.DATA_URI)
.then(()=>{
    console.log("connected to DB")
    app.listen(port, () => {
        console.log("listening on 3000")
    })
}).catch((error) => {
    console.log("Connection failed", error)
})
