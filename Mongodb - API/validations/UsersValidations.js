const Ajv = require('ajv');
const ajv = new Ajv();

module.exports.RegisterValidation = ajv.compile({
    type: 'object',
    properties: {
        username: { type: 'string' },
        password: { type: 'string' }
    },
    required: ['username', 'password'],
    additionalProperties: false
})


module.exports.LoginValidation = ajv.compile({
    type: 'object',
    properties: {
        username: { type: 'string' },
        password: { type: 'string' }
    },
    required: ['username', 'password'],
    additionalProperties: false
})