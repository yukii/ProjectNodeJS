const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ManagerSchema = new Schema ({
	nom: {
		type: String
	},
	prenom: {
		type: String
	},
	email: {
		type: String,
		lowercase : true
	},
	telephone: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
})

module.exports = mongoose.model('manager', ManagerSchema)