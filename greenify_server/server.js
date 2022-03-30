const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());

app.use(express.static('public'));

/**
 * Database Firestore things
 */

const firebase = require("firebase");
require("firebase/firestore");

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

initializeApp({
   credential: applicationDefault()
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
 
app.post('/api/addTree', (req, res) => {

})