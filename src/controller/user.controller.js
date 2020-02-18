const User = require('../models/user.model')
const bcrypt = require('bcrypt')


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

	user.save().then(data => {
		res.send(data)
	}).catch(err => {
		res.status(500).send({
			message: err.message
		})
		console.log(err)
	})
}

exports.all = (req, res) => {
	User.find().then(users => {
		res.send(users)
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some errors occured when finding users"
		})
	})
}

exports.findOne = (req, res) => {
	User.findById(req.param.id).then(user => {
		if (!user) {
			return res.status(404).send({
				message: 'User not found'
			})
		}
		res.send(user)
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}

exports.updateOne = (req, res) => {
	User.findByIdAndUpdate(req.param.id, req.body).then(user => {
		if (!user) {
			return res.status(404).send({
				message: 'User not found'
			})			
		}
		res.send(user)
		User.findById(req.param.id).then(newUser => {
			res.send(newUser)
		})
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}

exports.removeOne = (req, res) => {
	User.findByIdAndRemove(req.params.id).then(user => {
		res.send({message: "User delete with success"})
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}

exports.removeAll = (req, res) => {
	User.removeAll().then(user => {
		res.send({message: "Users delete with success"})
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}
