const mongoose=require('mongoose')
var validator = require('validator');
const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken')
const userSchema=new mongoose.Schema(
    {
        fname:{
            type:String,
            required:true,
        },
        lname:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Email is inValid")
                }
            } 
        },
        password:{
            type:String,
            required:true,
        },
        tokens:[
            {
                token:{
                    type:String,
                    trim:true,
                }
            }
        ]
    }
)
userSchema.pre('save',async function(next){
    try{
        if(this.isModified('password')){
            this.password=await bcrypt.hash(this.password,10)
        }
        next();
    }
    catch(err){
        console.log("Error in hashing password")
    }
})

userSchema.methods.generateToken=async function(){
   try{
    const token=jwt.sign({_id:this.id.toString()},process.env.SECURE_KEY)
    this.tokens=this.tokens.concat({token:token})
    await this.save();
    return token 
   }
   catch(err){
       console.log("Error in token generation")
   }
}

const User=new mongoose.model('User',userSchema)

module.exports=User