const mongoose = require('mongoose')
const HospitalTypeSchema = new mongoose.Schema(
    {
        path: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    }    
)

const Hospital = new mongoose.model('Hospital', HospitalTypeSchema)

module.exports = Hospital