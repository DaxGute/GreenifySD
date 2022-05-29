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


app.listen(8080, () => {
   console.log('Server is up at port 8080');
});

require('./routes/getZip')(app)

require('./routes/postSignUp')(app, db)

require('./routes/postPlantTree')(app, db)