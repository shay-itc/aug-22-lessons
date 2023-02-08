require('dotenv').config();
const express = require('express');
const { initDB } = require('./models/init');
const UsersController = require('./controllers/UsersController');
const TasksController = require('./controllers/TasksController');
const { AuthMiddleware } = require('./middlewares/AuthMiddleware');

initDB();

// 1. Create TasksController
// 2. Create a CreateTask method
// { title: "", description: "", created_at: date, user_id: }
// 
//
//

const app = express();

app.use(express.json());

app.post('/register', UsersController.Register)
app.post('/login', UsersController.Login)

app.post('/task/new', AuthMiddleware, TasksController.CreateTask)

app.get('/tasks', AuthMiddleware, TasksController.TasksList)

app.listen(3000, async () => {
    console.log('Server is running on port 3000')

})
