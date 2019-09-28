const { Schema, model } = require('mongoose')

const kategoriSchema = new Schema({
	salary : Number,
},{ versionKey: false })

module.exports = model('kategori', kategoriSchema)