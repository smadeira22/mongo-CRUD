/*PORT=4000
MONGO_URL=mongodb+srv://andreia33:ela22@mernapp.1cvskml.mongodb.net/?retryWrites=true&w=majority*/ 
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bookRoutes = require('./routes/books')
//express app
const app = express()


//middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/books', bookRoutes)

mongoose.connect(process.env.MONGO_URL)
    .then(()=> {
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port',process.env.PORT)
    })
})
.catch((error)=> {
    console.log(error)
})

// listen for requests


