const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const MoviesClass = require('./moviesClass');
const { newMovieValidation } = require('./validations')

const moviesClass = new MoviesClass();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => { console.log('All routes'); next(); })

function authenticate(req, res, next) {

    let { authorization } = req.headers;

    if (!authorization)
        return res.status(401).send();

    authorization = authorization.replace('Bearer ', '')

    jwt.verify(authorization, 'mymovieapp', (err, data) => {
        if (err) {
            console.log('Not authenticated', err);
            return res.status(401).send();
        }
        console.log('Authenticated');
        next()
    })

}

app.post('/login', moviesClass.Login)


app.post('/movie', (req, res, next) => {

    const isValid = newMovieValidation(req.body);
    if (!isValid) {
        return res.status(400).json(newMovieValidation.errors);
    }

    next();

}, moviesClass.CreateMovie)

app.get('/movies/search/:term', authenticate, moviesClass.SearchMovieByTerm)

app.get('/movie/:id', (req, res, next) => {

    console.log(req.params)

    next();
}, moviesClass.GetMovieById)

app.get('/movies/genre/:genre', authenticate, moviesClass.GetMoviesByGenre)


app.listen(3000)