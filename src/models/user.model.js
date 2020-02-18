const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({
	nom: {
		type: String
	},
	prenom: {
		type: String
	},
	role: {
		typr: String
	},
	email: {
		type: String,
		lowercase : true
	},
	password: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 128
	},
	admin: {
		type: Boolean
	}
}, {
	timestamps: true
})

module.exports = mongoose.model('user', UserSchema)