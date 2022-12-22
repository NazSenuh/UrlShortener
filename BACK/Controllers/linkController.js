const Link = require('../models/Link')
const User = require('../models/User')
const shortid = require('shortid')



class linkController {
    async new(req,res){
        try {
            const baseUrl = 'http://localhost:5000'
            const {from} = req.body
            const code = shortid.generate()
            const existing = await Link.findOne({from})

            if(existing){
                return res.json({link:existing})
            }
            const to = baseUrl + '/t/'+code
            const link = new Link({
                code, to, from , owner: req.user.userId
            })

            await  link.save()
            await User.findOneAndUpdate(
                {"_id": req.user.userId},
                {$push:{links: [link]}}
            )

            res.status(201).json({link})

        }catch (e){
            res.status(500).json({message:e.message})
        }
    }
    async main(req,res){
        try {
            const links = await Link.find({owner: req.user.userId})
            res.json(links)
        }catch (e){
            res.status(500).json({message:'Something went wrong'})
        }
    }
    async id(req,res){
        try {
            const links = await Link.findById(req.params.id)

            //Link.owner = req.params._id

            res.json(links)
        }catch (e){
            res.status(500).json({message: e.message })
        }
    }

}


module.exports = new linkController()