require('dotenv').config();
const { initDB, closeConneciton } = require('./model/init')
const CustomersController = require('./controllers/CustomersController');
const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/customers/:sortKey?/:order?/:page?', CustomersController.ListCustomers);
app.post('/customer', CustomersController.CreateCustomer)

// create a new route POST '/customer', which create a new cusotmer in the database

initDB().then(() => {
    try {
        app.listen(port, () => {
            console.log('Express running on port 3000');
        })
    } catch (e) {
        closeConneciton();
    }
})