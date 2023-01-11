const fs = require('fs');
const jwt = require('jsonwebtoken');
const { newMovieValidation } = require('./validations')

class MoviesClass {

    moviesArray = [];
    #privateKey = 'mymovieapp';

    constructor() {

        let fileContent;
        try {
            fileContent = fs.readFileSync('./movies.json');
            this.moviesArray = JSON.parse(fileContent);
        } catch (e) {
            try {
                fs.writeFileSync('./movies.json.backup', fileContent);
            } catch (e) { }
            // console.log(e)
        }
    }

    Login = (req, res) => {

        const { username, password } = req.body;

        console.log('username, password', username, password);

        if (username == 'itcstudent' && password == 'fullstack') {
            const token = jwt.sign({ username }, this.#privateKey);

            console.log('token', token)

            return res.json({ token: token })
        }

        return res.status(401).send();
    }

    CreateMovie = (req, res) => {

        // const isValid = newMovieValidation(req.body);
        // if (!isValid) {
        //     return res.status(400).json(newMovieValidation.errors);
        // }

        let id = 1;
        if (this.moviesArray.length > 0) {
            id = this.moviesArray[this.moviesArray.length - 1].id + 1;
        }

        console.log(id);

        this.moviesArray.push({
            id: id,
            name: req.body.name,
            year: req.body.year,
            genres: req.body.genres,
            poster: req.body.poster
        })
        try {
            fs.writeFileSync('./movies.json', JSON.stringify(this.moviesArray))
        } catch (err) {
            console.log(err)
            return res.status(500).json();
        }

        return res.status(200).json({ success: true, id: id });
    }

    SearchMovieByTerm = (req, res) => {

        const { term } = req.params;

        const resultsArray = this.moviesArray.filter((movie) => movie.name.toLowerCase().includes(term.toLowerCase()));

        return res.json({
            Response: 'True',
            Search: resultsArray
        });
    }

    GetMovieById = (req, res) => {

        const { id } = req.params;

        const results = this.moviesArray.filter((movie) => movie.id === parseInt(id));

        return res.json({ movie: results.length > 0 ? results[0] : null })
    }

    GetMoviesByGenre = (req, res) => {

        const { genre } = req.params;

        const resultsArray = this.moviesArray.filter((movie) => movie.genres.includes(genre))

        return res.json({ results: resultsArray });
    }
}

module.exports = MoviesClass;