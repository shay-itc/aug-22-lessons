const Ajv = require('ajv');
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

module.exports.newMovieValidation = ajv.compile(newMovieSchema);
