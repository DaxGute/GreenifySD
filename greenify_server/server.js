const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch')
const fs = require('fs')
var FormData = require('form-data');
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

 let nodemailer = require('nodemailer');

 let transporter = nodemailer.createTransport({
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
const e = require('express');
app.get('/api/zipLongLat/:zip', (req, res) => {
   longLat = findLatLong(req.params.zip)
   res.json({
      "long": longLat[0],
      "lat": longLat[1]
   })
})
 
app.post('/api/signUp', async function (req, res) {
   let email = "" + req.body.email

   let UserData = await db.collection('Users').doc(email).get();
   if (!email.includes('@') || !email.includes('.')){
      res.json({'response': 'Please enter a valid email address',
                'loginVis': true})

   }else{
      let randomString = generateString(10)
   
      let randomLink = "http://localhost:3000/?key=" + randomString +"&email=" + email

      let mailOptions = {
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
       
       
      let UserData = await db.collection('Users').doc(email).get();
      if (UserData.exists){
         res.json({'response': 'The email was resent to you',
                   'loginVis': false})
      }else {
         await db.collection('Users').doc(email).set({
            planted: false,
            LocID: 0
         })
         res.json({'response': 'Please check you email for a link',
                   'loginVis': false})
      }
   }
})

let currUser = 0
app.post('/api/plantTree', async function (req, res) {
   let UserData = await db.collection('Users').doc(req.body.email).get();
   if (UserData.key = req.body.key){
      if (!UserData.planted) {
         let x = req.body.lat
         let y = req.body.long
         await db.collection('Users').doc(req.body.email).set({
            planted: true,
            LocID: currUser,
         })
         
         let allTreeLoc = await db.collection('TreeLoc').doc('TreeLoc').get()

         console.log("hi")
         await db.collection('TreeLoc').doc('TreeLoc').update({
            [currUser]: [x,y]
         })

         currUser += 1
      
         res.json({
            'success': true,
            'response': 'Planted!'
         })
      }else{
         res.json({
            'success': false,
            'response': 'Tree has already been planted on this account'
         })
      }

   }else{
      res.json({
         'success': false,
         'response': 'Key does not match with email'
      })
   }
})

//sk.eyJ1IjoiZGF4dG9uZ3V0ZSIsImEiOiJjbDFxdm4ycWUxczd2M2NqeG5uY3FzdTBwIn0.RV9-3HfeHmjLKWD9FJfjQg