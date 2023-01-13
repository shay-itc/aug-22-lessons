require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');



function sendEmail(to, subject, text) {

    const formData = FormData();

    formData.append('to', to);
    formData.append('from', process.env.MAILGUN_EMAIL);
    formData.append('subject', subject);
    formData.append('html', text);

    axios.post(process.env.MAILGUN_URL, formData, {
        headers: { "Content-Type": 'multipart/form-data' },
        auth: {
            username: 'api',
            password: process.env.MAILGUN_API_KEY
        }
    }).then((data) => {
        console.log(data.data)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports.sendEmail = sendEmail;