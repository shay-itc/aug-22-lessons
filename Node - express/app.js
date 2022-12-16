const express = require('express')
const bodyParser = require("body-parser");
const app = express()

let counter = 0;

app.use(bodyParser.json());

app.get('/counter', function (req, res) {

    const { multiply } = req.query

    counter++;

    console.log('multiply', multiply)
    console.log('counter', counter)

    res.json({ counter: counter * multiply })
})

// app.post('/post', function (req, res) {

//     const body = {};

//     req.body['key3'] = 'value 3';

//     res.send(req.body)
// })

app.post('/post', function (req, res) {
    const body = {};
    body['key'] = req.body['key2'];
    body['key2'] = req.body['key'];
    console.log("", req.body)
    res.send(body)
})

app.listen(3000)