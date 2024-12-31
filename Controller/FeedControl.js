const FeedBackModel = require('../Model/Feedback')

module.exports.getFeedBack = async(req,res)=>{
    const feedback = await FeedBackModel.find()
    res.send(feedback)
}

module.exports.saveFeedBack = async(req,res)=>{
    const {name,feedback} = req.body

    FeedBackModel
    .create({name,feedback})
    .then(()=> res.set(201).send('Added Sucessfully..'))
    .catch((err)=> console.log(err))
}