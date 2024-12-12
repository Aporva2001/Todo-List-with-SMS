const Todo = require("../models/todo");
const {validationResult} = require('express-validator')
const mongoose= require('mongoose')

exports.addTodo= (req, res, next)=>{
    const title= req.body.title;
    const desc= req.body.description;
    // const status= req.body.status;
    const dueDate= req.body.dueDate;
    const creator= req.body.creator;
    const errors= validationResult(req);
    // console.log(req.userId);

    if(errors.array().length > 0){
        console.log(errors);
        return;
    }
    const todo = new Todo({
        title: title,
        description: desc,
        // status: status,
        dueDate: dueDate,
        creator: creator
    })
    todo.save().then(result =>{
        res.status(201).json({
            message: 'Todo created Successfully',
            todo: todo
        })
    })

}

exports.updateTodo = (req, res, next) =>{
    const todoId = req.params.todoId;
    const updatedTitle= req.body.title;
    const updatedStatus= req.body.status;
    const updatedDesc= req.body.description;
    const updatedDueDate= req.body.dueDate;

    Todo.findById(todoId).then(todo =>{
        if(!todo){
            console.log('User not found');
            return;
        }
    todo.title= updatedTitle;
    todo.description= updatedDesc;
    todo.status=updatedStatus;
    todo.dueDate= updatedDueDate;

    return todo.save();
    })
    .then(result =>{
        res.status(204).json({
            message: 'Post Updated Successfully',
        })
    })
}

exports.getTodos = (req, res, next)=>{
    Todo.find()
    .sort('dueDate')
    .then(todos =>{
        res.status(200).json({
            message: 'Todos fetched successfully',
            todos: todos
        })
    })
}

exports.deleteTodo = (req, res, next)=>{
    const todoId= req.params.todoId;

    Todo.findByIdAndDelete(todoId).then(result =>{
        res.status(204).json({
            message: 'Posts deleted Successfully'
        })
    })
}
exports.findTodo = (req, res, next)=>{
    const todoId = req.params.todoId;
    // console.log(typeof todoId)
    // const todoId= new mongoose.Types.ObjectId(todoIdStr);
    Todo.findById(todoId)
    .then((todo)=>{
        if(!todo){
            console.log("Todo not found!");
            return;
        }
        res.status(200).json({message: "Todo found and fetched", todo: todo} )
    })
    .catch(err => console.log(err))
}