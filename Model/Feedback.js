const mongoose = require('mongoose')

const feedbackSchema =new  mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    feedback:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('FeedBack',feedbackSchema)