const express = require('express');
const app = express();
const MoviesClass = require('./moviesClass');
const { newMovieValidation } = require('./validations')

const moviesClass = new MoviesClass();

app.use(express.json());
app.use((req, res, next) => { console.log('All routes'); next(); })

app.post('/movie', (req, res, next) => {

    const isValid = newMovieValidation(req.body);
    if (!isValid) {
        return res.status(400).json(newMovieValidation.errors);
    }

    next();

}, moviesClass.CreateMovie)

app.get('/movies/search/:term', moviesClass.SearchMovieByTerm)

app.get('/movie/:id', (req, res, next) => {

    console.log(req.params)

    next();
}, moviesClass.GetMovieById)

app.get('/movies/genre/:genre', moviesClass.GetMoviesByGenre)



app.listen(3000)