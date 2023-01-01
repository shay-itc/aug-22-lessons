const express = require('express');
const app = express();
const MoviesClass = require('./moviesClass');

const moviesClass = new MoviesClass();

app.use(express.json());


app.post('/movie', moviesClass.CreateMovie)

// app.get('/movies/search/:term', function (req, res) {

//     const { term } = req.params;

//     console.log(term)

//     const resultsArray = moviesArray.filter((movie) => movie.name.toLowerCase().includes(term.toLowerCase()));

//     return res.json({
//         results: resultsArray
//     });
// })

// app.get('/movie/:id', function (req, res) {

//     const { id } = req.params;

//     const results = moviesArray.filter((movie) => movie.id === parseInt(id));

//     return res.json({ movie: results.length > 0 ? results[0] : null })
// })

// app.get('/movies/genre/:genre', function (req, res) {

//     const { genre } = req.params;

//     const resultsArray = moviesArray.filter((movie) => movie.genres.includes(genre))

//     return res.json({ results: resultsArray });
// })

// Create a new route GET /movies/genre/:genre  /movies/genre/action
// And return a list with all movies in this genre



app.listen(3000)