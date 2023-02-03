require('dotenv').config();
const express = require('express');
const { initDB } = require('./models/init');
const UsersController = require('./controllers/UsersController');

initDB()

const app = express();

app.use(express.json());

app.post('/register', UsersController.Register)
app.post('/login', UsersController.Login)

app.listen(3000, async () => {
    console.log('Server is running on port 3000')

})
