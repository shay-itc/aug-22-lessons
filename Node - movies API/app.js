const express = require('express');
const app = express();
const Ajv = require('ajv');
const fs = require('fs');
const ajv = new Ajv();

const newMovieSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
        year: { type: "integer", maximum: new Date().getFullYear(), minimum: (new Date().getFullYear() - 100) },
        genres: { type: "array" },
        poster: { type: "string" }
    },
    required: ['name', 'year', 'genres', 'poster']
}

const newMovieValidation = ajv.compile(newMovieSchema);

app.use(express.json());

let moviesArray = [];
let fileContent;
try {
    fileContent = fs.readFileSync('./movies.json');
    moviesArray = JSON.parse(fileContent);
} catch (e) {
    try {
        fs.writeFileSync('./movies.json.backup', fileContent);
    } catch (e) { }
    // console.log(e)
}

app.post('/movie', function (req, res) {

    const isValid = newMovieValidation(req.body);
    if (!isValid) {
        return res.status(400).json(newMovieValidation.errors);
    }

    let id = 1;
    if (moviesArray.length > 0) {
        id = moviesArray[moviesArray.length - 1].id + 1;
    }

    console.log(id);

    moviesArray.push({
        id: id,
        name: req.body.name,
        year: req.body.year,
        genres: req.body.genres,
        poster: req.body.poster
    })
    try {
        console.log('moviesArray', moviesArray)
        fs.writeFileSync('./movies.json', JSON.stringify(moviesArray))
    } catch (err) {
        console.log(err)
        return res.status(500).json();
    }

    return res.status(200).json({ success: true, id: id });
})

app.listen(3000)