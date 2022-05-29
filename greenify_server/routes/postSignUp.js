
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'stmp',
  host: 'smtpout.secureserver.net',
  port: '587',
  auth: {
    user: 'daxton@gutekunst.com',
    pass: 'daxton4077'
  }
});

function sendMessage(randomLink, email){
    let mailOptions = {
        from: 'daxton@gutekunst.com',
        to: email,
        subject: 'Your Personalized GreenifySD Link',
        html: 
        '<h1>Your Personalized Link</h1>  \
        <p>By clicking the below button, you will be taken back to the GreenifySD website.</p>\
        <a style="padding: 10px; margin-top: 10px; margin-bottom: 10px; border-radius: 10px; border-width: 0px; background-color:lightgreen;" href="' + randomLink + '"> Click This to Start </a>\
        <p>Daxton Gutekunst <br>Founder of GreenifySD</p>\
        <img style="width: 100px; height: 100px;" src="http://localhost:3000/static/logo.png">\
        <hr>\
        <p>You have received this email because you indicated that you would like to sign up to plant a tree.</p>\
        <p>If you didn\'t request this link, you can safely ignore this email. Someone else might have typed your email address by mistake.</p>'
        };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        }
    });
}

module.exports = function(app, db){


    app.post('/api/signUp', async function (req, res) {
        let email = "" + req.body.email
    
        let UserData = await db.collection('Users').doc(email.toLowerCase()).get();
        if (!email.includes('@') || !email.includes('.')){
            res.json({'response': 'Please enter a valid email address',
                        'loginVis': true})
            return
        }

        if (UserData.exists){
            if (UserData.data().planted) {
                res.json({'response': 'This account already has planted a tree.',
                            'loginVis': false})
            }else{
                let randomString = generateString(10)
                let randomLink = "http://localhost:3000/?key=" + randomString +"&email=" + email
                sendMessage(randomLink, email)
                res.json({'response': 'Email has been resent.',
                            'loginVis': false})
            }
            
        }else {
            let randomString = generateString(10)
            let randomLink = "http://localhost:3000/?key=" + randomString +"&email=" + email
            sendMessage(randomLink, email)
            
            await db.collection('Users').doc(email.toLowerCase()).set({
                planted: false,
                LocID: 0
            })
            res.json({'response': 'Please check you email for a link',
                        'loginVis': false})
        }
        
    })

 
}