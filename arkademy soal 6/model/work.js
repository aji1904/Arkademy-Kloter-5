const { Schema, model } = require('mongoose')

const workSchema = new Schema({
	name: String,
	id_salary : {
		type: Schema.Types.ObjectId,
		ref: 'kategori'
	},
},{ versionKey: false })

module.exports = model('work', workSchema)