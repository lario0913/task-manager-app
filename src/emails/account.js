// 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
// 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 
const sgMail = require('@sendgrid/mail')
// const sendgridAPIKey = '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'
// sgMail.setApiKey(sendgridAPIKey)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lariokingsly@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to my app, ${name}. Let me know how you get along with the app.`
    })
}

const sendTerminationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lariokingsly@gmail.com',
        subject: 'Account removed',
        text: `Your account, ${name}, has been successfully removed. If you don't mind telling us why you removed your account.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendTerminationEmail
}

