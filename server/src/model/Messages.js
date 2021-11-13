const mongoose = require('mongoose')
const MessageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim:true
        },
        email: {
            type: String,
            required: true,
            trim:true
        },
        phone: {
            type: String,
            required: true,
            trim:true
        },
        message:{
            type:String,
            required:true,
            trim:true
        },
        replies:[
            {
                email:{
                    type:String,
                    default:"mernstack@gmail.com"
                },
                msg:String,

            }
        ]
    }    
)

const Message = new mongoose.model('Message', MessageSchema)

module.exports = Message