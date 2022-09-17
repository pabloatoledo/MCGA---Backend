const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductsSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        maxLength: 50,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        maxLength: 50,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("Profiles", ProductsSchema)