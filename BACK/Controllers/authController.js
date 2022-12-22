const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const {secret} = require('../config')


/*generateAccessToken = (id)=>{
    const payload ={
        id
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}*/

class AuthController {
    async registration(req,res){
        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return  res.status(400).json({message:"registration problem", errors})
            }
            const{username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate){
                return  res.status(400).json({message:"This name is already taken"})
            }

            const hashPassword = bcryptjs.hashSync(password, 7);
            const user = new User({username, password: hashPassword})
            await  user.save()
            return res.json({message:"Registration completed"})

        }catch (e){
            console.log(e)
            res.status(400).json({message:'Registration error'})
        }
    }
    async login(req,res){
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user){
                return res.status(400).json({message: 'there is no such client'})
            }
            const validPassword = bcryptjs.compareSync(password, user.password)
            if (!validPassword){
                return res.status(400).json({message: 'Password is wrong'})
            }

            const token = jwt.sign(
                {userId: user.id},
                secret,
                {expiresIn: "24h"}
            )
            return res.status(200).json({token, userId: user.id})

        }catch (e){
            console.log(e)
            res.status(400).json({message:'Login error'})
        }
    }

}


module.exports = new AuthController()