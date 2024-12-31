const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const routes = require('./Router/FeedRouter')
const port = process.env.port ||3000
require('dotenv').config
app.use(cors())
app.use(bodyparser.json())
app.use(routes)

const MONGO_URL = 'mongodb://127.0.0.1:27017/feedback';

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('connected to database')
}).catch(()=>{
    console.log('error connecting to database') 
})

app.get('/',(req,res)=>{
    res.send('hello')
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})