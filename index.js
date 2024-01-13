const express = require('express')
const app = express()
const port = 8000
const nodemailer = require('nodemailer')

app.get('/', (req,res) => {
    res.send("home page")
})

//transporter object
const transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
        user: "your email",
        pass : "your password" //use app specific password
        //if you don`t have an app specific password goto
        // google account > security > search for app password create one
    }
})

//mailOptions object
const mailOptions = {
    from : "your email",
    to : "reciever email",
    subject : "subject of email",
    text : "email text"
}

//transporter.sendMail method
transporter.sendMail(mailOptions, (err, info) => {
    if(err){
        console.log("can`t send mail " + err)
    }else{
        console.log("Email sent : " + info.response)
    }
})

app.listen(port, (err) => {
    if(err)
        console.log("error occured " + err)

    console.log(`connected on port ${port}`)
})
