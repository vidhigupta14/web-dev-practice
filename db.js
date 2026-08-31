import express from 'express';
import {Todo} from './models/todo.js';
import mongoose from 'mongoose';

const app = express()
const port = 3000

let conn = await mongoose.connect('mongodb://localhost:27017/todoapp')

app.get('/', (req, res) => {
  res.send('Hello World!')
  const todo = new Todo({ title: 'My Todo', desc: 'This is a todo item', isDone: false });
  todo.save();
  console.log('Todo saved:', todo);
})

app.get('/todo', async (req, res) => {
    let todo = await Todo.findOne({})
    res.json({ title: todo.title, desc: todo.desc, isDone: todo.isDone })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
