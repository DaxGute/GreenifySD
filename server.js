const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());

app.use(express.static('public'));
app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(8080, () => {
   console.log('Server is up at port 8080');
});