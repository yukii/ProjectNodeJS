const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GolfSchema = new Schema ({
	titre: {
		type: String
	},
	latitude: {
		type: String
	},
	longitude: {
		typr: String
	},
	description: {
		type: String,
		lowercase : true
	},
	manager: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 128
	}
}, {
	timestamps: true
})

module.exports = mongoose.model('golf', GolfSchema)