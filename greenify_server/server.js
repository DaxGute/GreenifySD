const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());

app.use(express.static('public'));
app.use(express.json())

/**
 * Database Firestore things
 */

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();


/**
 * setting up email
 */

 var nodemailer = require('nodemailer');

 var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'daxtongute@gmail.com',
     pass: 'DaxtonGute407'
   }
 });

 const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

 function generateString(length) {
     let result = '';
     const charactersLength = characters.length;
     for ( let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
 }

app.listen(8080, () => {
   console.log('Server is up at port 8080');
});

const findLatLong = require('./findZipCode');
app.get('/api/zipLongLat/:zip', (req, res) => {
   longLat = findLatLong(req.params.zip)
   res.json({
      "long": longLat[0],
      "lat": longLat[1]
   })
})
 
app.post('/api/signUp', async function (req, res) {
   var email = "" + req.body.email

   var UserData = await db.collection('Users').doc(email).get();
   if (!email.includes('@') || !email.includes('.')){
      res.json({'response': 'Please enter a valid email address',
                'loginVis': true})

   }else{
      var randomString = generateString(10)
      console.log(randomString)
      var randomLink = "http://localhost:3000/?key=" + randomString +"&email=" + email

      var mailOptions = {
         from: 'daxtongute@gmail.com',
         to: email,
         subject: 'Your Personalized Greenify Link',
         html: '<h1>Your Link</h1> <a href=' + randomLink + '> Link </a>'
       };

      transporter.sendMail(mailOptions, function(error, info){
         if (error) {
           console.log(error);
         }
      });
       
      await db.collection('Users').doc(email).set({
         'planted': false,
         'treeLoc': [0, 0],
         'key': randomString,
      })
       
      var UserData = await db.collection('Users').doc(email).get();
      if (UserData.exists){
         res.json({'response': 'The email was resent to you',
                   'loginVis': false})
      }else {
         res.json({'response': 'Please check you email for a link',
                   'loginVis': false})
      }
   }
})

app.post('/api/plantTree', async function (req, res) {
   var UserData = await db.collection('Users').doc(req.body.email).get();
   if (UserData[""]){
      if (!UserData['treeLoc'][0]) {
         var x = "" + req.body.lat
         var y = "" + req.body.long
         await db.collection('Users').doc(email).set({
            'planted': true,
            'treeLoc': [x, y],
         })
      }
   }
})

//sk.eyJ1IjoiZGF4dG9uZ3V0ZSIsImEiOiJjbDFxdm4ycWUxczd2M2NqeG5uY3FzdTBwIn0.RV9-3HfeHmjLKWD9FJfjQg