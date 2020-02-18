const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.create = (req, res) => {
	let heshedPassword = bcrypt.hasgSync(req.body.password, 8);
	console.log(heshedPassword)
	const user = new User({
		email: req.body.email,
		password: heshedPassword,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		admin: req.body.admin
	})
	// if (err) {
	// 	res.send(err)
	// }
	// else {
	user.save().then(data => {
		let token = jwt.sign({
			id: user.email,
			admin: user.admin
		},
		'supersecret',
		{
			expiresIn: 86400
		})
		res.send({
			auth: true,
			token: token,
			body: data
		})
	}).catch(err => {
		res.status(500).send({
			message: err.message
		})
		console.log(err)
	})
	// }
}

exports.login = (req, res) => {
	User.findOne(req.body.email).then(user => { // {email: req.body.email}
		if (!user) {return res.status(404).send('nope')}
		if (bcrypt.compareSync(req.body.password, user.password)) {
			return res.status(401).send({
				auth: false,
				token: null
			})
		}

		let token = jwt.sign({
			id: user._id,
			admin: user.admin,
			data: user
		}, "supersecret", {
			expires: 86400
		})

		res.status(200).send({
			auth: true,
			token: token
		})
	})
	// etape 1: rechercher dans la db le user avec email
	// etape 2: vérifier si le mot de passe reçu == mot de passe dans la db
	// etape 3: générer un nouveau token et onl'envoie dans la réponse

}
