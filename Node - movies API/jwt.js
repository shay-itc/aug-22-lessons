const jwt = require('jsonwebtoken');

const privateKey = 'my secret password';

const token = jwt.sign({
    user_id: 1234,
    username: 'moshe',
    role: 'admin',
    device_id: "123456"
}, privateKey);

console.log('token', token)

jwt.verify(token, privateKey, (err, decoded) => {
    console.log(err, decoded)
})
