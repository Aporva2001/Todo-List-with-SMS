const express = require('express');
const todoRoutes= require('./routes/todos');
const userRoutes= require('./routes/user')
const bodyParser= require('body-parser');
const mongoose= require('mongoose')


const app= express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
    next();
})
app.use(todoRoutes);
app.use(userRoutes);

mongoose.connect('mongodb+srv://username:password@cluster0.qpciz.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    app.listen(8080);
    console.log('Database connected Successfully')
})
.catch(err =>{
    console.log('Database connection failed')
})