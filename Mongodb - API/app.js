require('dotenv').config();
const express = require('express');
const { initDB } = require('./models/init');
const UsersController = require('./controllers/UsersController');
const TasksController = require('./controllers/TasksController');
const { AuthMiddleware } = require('./middlewares/AuthMiddleware');

const app = express();
module.exports.app = app;


app.use(express.json());

app.post('/register', UsersController.Register)
app.post('/login', UsersController.Login)

app.post('/task/new', AuthMiddleware, TasksController.CreateTask)

app.get('/tasks', AuthMiddleware, TasksController.TasksList)
