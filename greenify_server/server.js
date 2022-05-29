const express = require('express');
const app = express();
const cors = require('cors');
const http = require("http");
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


const server = http.createServer(app) 

server.listen(8080, () => {
   console.log('Server is up at port 8080');
});

require('./routes/getZip')(app)

require('./routes/postSignUp')(app, db)

require('./routes/postPlantTree')(app, db)

module.exports = server;