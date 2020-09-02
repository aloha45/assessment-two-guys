const mongoose = require('mongoose')
const Schema = mongoose.Schema

const guysSchema = new Schema({
    name: {type: String, required: true},
    sexy: {type: Boolean, default: false}
})

module.exports = mongoose.model('Guy', guysSchema)