'use strict'
module.exports=app=>{
    const express=require('express')
    const route=express.Router()   
    const helper=require('../Helper/action')
    route.post('/prime',helper.prime)
    route.post('/odd',helper.odd)
    route.post("/format",helper.formatNumber)
    app.use('api/v1/helper',route)
}