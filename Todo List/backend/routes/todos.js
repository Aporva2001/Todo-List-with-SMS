const express= require('express');
const todoController= require('../controllers/todo');
const {check}= require('express-validator');

const router= express.Router();

router.post('/add-todo',[
    check('title').trim().isLength({min: 3}).withMessage('Title should have minimum length of 3 characters'),
    check('description').trim().isLength({min: 5}).withMessage('Description should have minimmum 5 characters')
], todoController.addTodo);
router.put('/update/:todoId',[
    check('title').trim().isLength({min: 3}).withMessage('Title should have minimum length of 3 characters').isAlphanumeric(),
    check('description').trim().isLength({min: 5}).withMessage('Description should have minimmum 5 characters')
],todoController.updateTodo);
router.get('/:todoId',todoController.findTodo);
router.get('/',todoController.getTodos);

router.delete('/delete/:todoId',todoController.deleteTodo)


module.exports= router;