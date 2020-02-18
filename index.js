const app = require('./src/services/express.service')
const mongoose = require('./src/services/mongoose.service')

app.start()
mongoose.connect()