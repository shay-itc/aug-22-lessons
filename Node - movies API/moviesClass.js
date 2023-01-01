const fs = require('fs');
const { newMovieValidation } = require('./validations')

class MoviesClass {

    constructor() {

        this.moviesArray = [];
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

    CreateMovie = (req, res) => {

        console.log(this)
        const isValid = newMovieValidation(req.body);
        if (!isValid) {
            return res.status(400).json(newMovieValidation.errors);
        }

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
}

module.exports = MoviesClass;