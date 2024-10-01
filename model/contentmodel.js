var mongoose = require("mongoose")

var contentSchema = new mongoose.Schema({
    course_id:{
        type:String,
    },
    contents:{
        type:String,
    },
    fees:{
        type:String,
    },
    duration:{
        type:String,
    },
})

module.exports = mongoose.model ("content",contentSchema)