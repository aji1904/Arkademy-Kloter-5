const { Schema, model } = require('mongoose')

const namaSchema = new Schema({
	name: String,
	work : String,
	salary : Number,
},{ versionKey: false })

module.exports = model('nama', namaSchema)