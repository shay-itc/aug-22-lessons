const Ajv = require('ajv');
const { addListener } = require('nodemon');
const ajv = new Ajv();

const myObject = {
    "foo": "barasdasdasd",
    "number": 1,
    optional: 'option1'
}

const schema = {
    type: "object",
    properties: {
        foo: { type: "string", minLength: 10 },
        number: { type: "integer", maximum: 10 },
        optional: { type: "string", enum: ['option1', 'option2'] }
    },
    required: ["foo", "number"],
    additionalProperties: true
}

const validate = ajv.compile(schema);

console.log(validate(myObject));
console.log(validate.errors);


// {
//     "bar": 'string',
//         "text": 'Minimum of 20',
//             "integer": 'integer'
// }