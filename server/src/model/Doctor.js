const mongoose = require('mongoose')
const DoctorSchema = new mongoose.Schema(
    {
        path: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        }
    }    
)

const Doctor = new mongoose.model('Doctor', DoctorSchema)

module.exports = Doctor