const mongoose = require('mongoose')
const AnaemiaTypeSchema = new mongoose.Schema(
    {

        type: {
            type: String,
            required: true,
        },
        
        defination: [
            {
                info:{
                    type:String
                }
            }
        ],
        symptoms: {
            desc: {
                type: String,
                trim: true
            },
            data: [
                {
                    p:{
                        type:String,
                        trim:true
                    }
                }
            ]
        },
        causes: {
            desc: {
                type: String,
                trim: true
            },
            data: [
                {
                    heading:{
                        type: String,
                        trim: true
                    },
                    info:[{
                        p:{
                            type:String,
                            trim:true
                        }
                    }]
                }
            ]
        },
        treatment: {
            desc: {
                type: String,
                trim: true
            },
            data: [
                {
                    heading:{
                        type: String,
                        trim: true
                    },
                    info:[{
                        p:{
                            type:String,
                            trim:true
                        }
                    }]
                }
            ]
        },
        diagnosis: {
            desc: {
                type: String,
                trim: true
            },
            data: [
                {
                    heading:{
                        type: String,
                        trim: true
                    },
                    info:[{
                        p:{
                            type:String,
                            trim:true
                        }
                    }]
                }
            ]
        },
        images: [
            {
                name: {
                    type: String,
                    trim: true,
                },
                path: {
                    type: String,
                    trim: true
                },
            }
        ]
    }
)

const AnaemiaType = new mongoose.model('AnaemiaType', AnaemiaTypeSchema)

module.exports = AnaemiaType