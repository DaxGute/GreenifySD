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
 
app.post('/api/signUp', (req, res) => {
   var email = "" + req.body.email
   if (!email.includes('@ ') || !email.includes('.')){
      res.json({'response': 'Please enter a valid email address'})
   }else{
      try{
         res.json({'response': 'The email was resent to you'})
      }catch{
         res.json({'response': 'Please check you email for a link'})
      }
   }
})