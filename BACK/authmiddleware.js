const jwt = require('jsonwebtoken')
const {secret} = require('./config')
module.exports = (req,res, next) => {
    if (req.method === 'OPTIONS'){
        next()
    }

    try {
        //console.log(req.headers, 'check')

        const token = req.headers.authorization
        //console.log(token)
        if(!token){
            return res.status(401).json({message:"Please lo"})
        }

        const decoded = jwt.verify(token, secret)
        req.user = decoded
        next()
    }catch (e){
        console.log(e.message)
        return res.status(401).json({message:"Please log"})
    }
}