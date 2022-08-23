const express = require('express');
const router = express.Router();
const Todo = require('../models/Todos');

// Get all todo
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});


// Create a todo
router.post('/create', async (req, res) => {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();

    res.json(savedTodo);
});

// find single todo
router.get('/get/:id', async (req, res) => {
    const todo = await Todo.findById({ _id: req.params.id })
    res.json(todo);
});

// update todo
router.put('/update/:id', async (req, res) => {
    const updatedTodo = await Todo.updateOne(
        { _id: req.params.id }, 
        { $set: req.body }
    );
    res.json(updatedTodo);
})

// delete a todo
router.delete('/delete/:id', async (req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete({ _id: req.params.id });
    res.json(deletedTodo);
});

module.exports = router;