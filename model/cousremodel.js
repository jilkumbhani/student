var mongoose = require("mongoose")

var courseSchema = new mongoose.Schema({
    addcourse:{
        type:String,
    }
})

module.exports = mongoose.model ("course",courseSchema)