const {getToken} = require('../firebase')
async function isUser(req, res, next) {
  const newReq =req
  const token = req.headers['Authorization']

  if(token){

     const isAuth = await getToken(token)

      if(!isAuth){
        // res.status(403).send({ error: "Forbiden !"}); 
      }else{
        next()
      }
     
  }else{
    // res.status(403)
    // return res.json({ error:'Forbidden ! '})
  }
  next()
}

module.exports = {isUser}