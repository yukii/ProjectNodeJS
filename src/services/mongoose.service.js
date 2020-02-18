const mongoose = require('mongoose');
const config = require('../config/db.config');

exports.connect = () => {
	let url = config.url;
	mongoose.connect(url, {
		useNewUrlParser : true,
		useUnifiedTopology: true 
	}
	).then(() => {
		console.log('Sucess to connect to db')
	}).catch(err => {
		console.log('could not connect to db : '.err)
		process.exit(-1)
	})
}
