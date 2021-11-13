const mongoose=require('mongoose')
const NutritionalFoodSchema=new mongoose.Schema(
    {
        
        nutrient:{
            type:String,
            required:true,
        },
        items:[
            { 
                title:{
                    type:String,
                    trim:true,
                    required:true,
                },
                path:{
                    type:String,
                    trim:true
                },
                content:{
                    type:String,
                    trim:true
                },
                heading:{
                    type:String,
                    trim:true
                },
                data:[
                    {info:{
                        type:String,
                        trim:true
                    }}
                ], 
                images:[
                    {
                        name:{
                            type:String,
                            trim:true,                 
                        },
                        path:{
                            type:String,
                            trim:true
                        },
                    }
                ]
            }
        ] 
        
    }
)

const NutritionalFood=new mongoose.model('NutritionalFood',NutritionalFoodSchema)

module.exports=NutritionalFood 