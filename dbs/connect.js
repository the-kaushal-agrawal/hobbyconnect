const mongoose = require('mongoose');
const express = require('express');


const dotenv = require('dotenv');
const URL ="mongodb+srv://kaushalacm20:V9jFprRkVYa9YjfB@cluster1.ypjvrlw.mongodb.net/?retryWrites=true&w=majority"


//let URL = process.env.DATABASEURL || 'mongodb://localhost:27017/hobby';


mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log(`connected successfully`);
}).catch(() => {
    console.log('no connection');
});
