const findLatLong = require('../findZipCode');

module.exports = function(app){

    app.get('/api/zipLongLat/:zip', (req, res) => {
        longLat = findLatLong(req.params.zip)
        res.json({
           "long": longLat[0],
           "lat": longLat[1]
        })
     })

}