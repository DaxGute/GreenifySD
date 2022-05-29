module.exports = function(app, db){

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
     
}