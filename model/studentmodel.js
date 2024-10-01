var mongoose = require("mongoose")

var studentSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})

module.exports = mongoose.model ("student",studentSchema)