const {Schema, model, Types} = require('mongoose')

const UserSchema = new Schema({
    username: {type: String, unique: true, required:true},
    password: {type: String, required:true},
    links: [{type: Types.ObjectId, ref:'Link'}]

})

module.exports = model('User', UserSchema)