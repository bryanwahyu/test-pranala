'use strict'
const express=require('express')
let app =express()
let cors=require('cors')
let corsOption={
    origin:"*"
}

app.use(cors(corsOption))
require('./src/Route/Routehelper')(app)
app.listen(8000,async()=>{
    console.log('server run')
})