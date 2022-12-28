const express = require('express');
const cors = require("cors");
const Ajv = require('ajv');
const fs = require('fs');
const app = express()

const ajv = new Ajv();

app.use(function (req, res, next) {
    console.log('Mid');
    next();
});
app.use(cors());
app.use(express.json());

let notes = [];
try {
    const dbData = fs.readFileSync('./db.json')
    notes = JSON.parse(dbData);
} catch (e) {
    console.log(e)
}

const newNoteSchema = {
    type: "object",
    properties: {
        subject: { type: 'string', minLength: 5 },
        note: { type: 'string', minLength: 5 },
    },
    required: ['subject', 'note']
}
const newNoteValidation = ajv.compile(newNoteSchema);

function validateInput(validationSchema) {

    return function (req, res, next) {

        const isValid = validationSchema(req.body);
        if (!isValid) {
            return res.status(400).json({ message: newNoteValidation.errors[0].message })
        }

        next();
    }
}

function NewNote(req, res) {

    console.log('Inside the route', req['my-custom-something'])

    const { subject, note } = req.body;

    notes.push({ subject, note });
    fs.writeFileSync('./db.json', JSON.stringify(notes, null, 4));

    console.log(notes)

    return res.json(notes);
}
app.post('/note', validateInput(newNoteValidation), NewNote)


app.get('/notes', function (req, res) {

    return res.json(notes);
})

app.listen(3000)

// When the app launches get the data from the JSON file and set it into the notes array, if the file is empty or does not exist
// set an empty array 