module.exports = function(app, db){

    app.post('/api/plantTree', async function (req, res) {
        let UserData = await db.collection('Users').doc(req.body.email.toLowerCase()).get();
        if (!UserData.exists){
            res.json({
               'success': false,
               'response': 'Email does not match with one in database'
            })
            return
        }
        
        let data = UserData.data()
        if (data.key == req.body.key){
           if (!data.planted) {
              let x = req.body.lat
              let y = req.body.long
              await db.collection('Users').doc(req.body.email.toLowerCase()).update({
                 planted: true,
               })
     
              await db.collection('TreeLoc').doc('TreeLoc').update({
                 [data.LocID]: [x,y]
              })

           
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