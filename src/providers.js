const mongoose = require('mongoose')
const { Schema } = mongoose

const ProvidersSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        maxLength: 50,
        required: true,
        unique: true,
    },
    product: {
        type: String,
        maxLength: 50,
        required: true,
    },
    direction: {
        type: String,
        maxLength: 50,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
});


module.exports = mongoose.model("Providers", ProvidersSchema)