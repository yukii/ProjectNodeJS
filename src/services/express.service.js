const express = require('express')
const config = require('../config/server.config.js')
const bodyParser = require('body-parser')
const apiRouter = require('../routes/index.js')
const cors = require('cors')

const app = express();

app.use(bodyParser.json())
app.use('/api/v1', apiRouter)

exports.start = () => {
	let port = config.port;
	app.listen(port, (err) => {
		if (err) {
			console.log('Error : ${err}')
			process.exit(-1);
		}
		console.log('hey')
	})
}
