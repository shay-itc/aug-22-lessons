const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express()

app.use(bodyParser.json());

let notes = [];
try {
    const dbData = fs.readFileSync('./db.json')
    notes = JSON.parse(dbData);
} catch (e) {
    console.log(e)
}

app.post('/note', function (req, res) {

    const { subject, note } = req.body;

    if (subject && note && subject.length > 0 && note.length > 0) {
        notes.push({ subject, note });
        fs.writeFileSync('./db.json', JSON.stringify(notes, null, 4));
    }

    console.log(notes)

    return res.json(notes);
})


app.get('/notes', function (req, res) {

    return res.json(notes);
})

app.listen(3000)

// When the app launches get the data from the JSON file and set it into the notes array, if the file is empty or does not exist
// set an empty array 