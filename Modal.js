    const mongoose = require('mongoose')

    const schema = new mongoose.Schema({
        timer1 : String,
        timer2 : String
    })

    const User = mongoose.model("timer", schema)
    
    module.exports = User