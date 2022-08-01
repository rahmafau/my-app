const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shopinc.musc@gmail.com',
        pass: 'jxwpqxqgzzakdkqw'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter