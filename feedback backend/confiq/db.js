const express = require('express');
const mongoose = require('mongoose');

const db = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            usenewUrlParser:true,
            useUnifiedTopology:true

        });
        console.log('mongod connected');

    }catch(error){
        console.log('database connection failed',error.message);
    }
}