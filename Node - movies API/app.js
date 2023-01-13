require('dotenv').config();
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const MoviesClass = require('./moviesClass');
const { newMovieValidation } = require('./validations')

function logger(severity, text) {

    if (process.env.STATUS == 'production') {
        fs.writeFileSync('./log.txt', `${new Date()} ${severity} ${text} \n`, { flag: 'a+' })
    } else {
        console.log(`${severity} ${text}`)
    }
}

console.log('JWT_KEY', process.env.JWT_KEY)
console.log('UPLOADS_DIR', process.env.UPLOADS_DIR)
console.log('JUST_A_NUMBER', typeof process.env.JUST_A_NUMBER)

const moviesClass = new MoviesClass();

const uploadsDirectory = 'uploads';

app.use(cors());
app.use(express.json());
app.use(authenticate)
app.use('/' + uploadsDirectory, express.static(uploadsDirectory));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './' + uploadsDirectory);
    },
    filename: function (req, file, cb) {
        logger('DEBUG', file)

        if (file.mimetype != 'image/jpeg') {
            cb(new Error('Wrong mime type'));
            return;
        }

        const newFileName = Date.now() + (Math.random() * 1000) + file.originalname;

        cb(null, newFileName);
    }
})

const upload = multer({ storage })

app.post('/poster', upload.single('file'), function (req, res) {

    logger('INFO', req.file.path);

    return res.json({
        file: 'http://localhost:3000/' + req.file.path
    })
})


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

        jwt.verify(authorization, process.env.JWT_KEY, (err, data) => {
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