const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const MoviesClass = require('./moviesClass');
const { newMovieValidation } = require('./validations')

const moviesClass = new MoviesClass();

const uploadsDirectory = 'uploads';

app.use(cors());
app.use(express.json());
app.use(authenticate)
app.use('/' + uploadsDirectory, express.static(uploadsDirectory));


const upload = multer({ dest: uploadsDirectory })


app.post('/poster', upload.single('poster'), function (req, res) {

    console.log('uploaded', req.file.path);

    return res.json({
        file: 'http://localhost:3000/' + req.file.path
    })
})

// install multer
// create the upload object
// create a new route /poster to receive a file and save it


function authenticate(req, res, next) {

    console.log(req.path)
    const excludedPaths = ['/login', '/register', '/poster'];
    if (excludedPaths.includes(req.path) || req.path.includes('/' + uploadsDirectory + '/')) {
        next();
    } else {

        let { authorization } = req.headers;

        if (!authorization)
            return res.status(401).send();

        authorization = authorization.replace('Bearer ', '')

        console.log('authorization', authorization)

        jwt.verify(authorization, 'mymovieapp', (err, data) => {
            if (err) {
                console.log('Not authenticated', err);
                return res.status(401).send();
            }
            console.log('Authenticated', data);
            next()
        })
    }

}

app.post('/login', moviesClass.Login)


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