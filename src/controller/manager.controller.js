const manager = require('../models/manager.model')
const bcrypt = require('bcrypt')


exports.create = (req, res) => {
	let heshedPassword = bcrypt.hasgSync(req.body.password, 8);
	console.log(heshedPassword)
	const manager = new Manager({
		nom: req.body.nom,
		prenom: req.body.prenom,
		email: req.body.email,
		telephone: req.body.telephone
	})

	manager.save().then(data => {
		res.send(data)
	}).catch(err => {
		res.status(500).send({
			message: err.message
		})
		console.log(err)
	})
}

exports.all = (req, res) => {
	manager.find().then(managers => {
		res.send(managers)
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some errors occured when finding managers"
		})
	})
}

exports.findOne = (req, res) => {
	manager.findById(req.param.id).then(manager => {
		if (!manager) {
			return res.status(404).send({
				message: 'manager not found'
			})
		}
		res.send(manager)
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}

exports.updateOne = (req, res) => {
	manager.findByIdAndUpdate(req.param.id, req.body).then(manager => {
		if (!manager) {
			return res.status(404).send({
				message: 'manager not found'
			})			
		}
		res.send(manager)
		manager.findById(req.param.id).then(newmanager => {
			res.send(newmanager)
		})
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}

exports.removeOne = (req, res) => {
	manager.findByIdAndRemove(req.params.id).then(manager => {
		res.send({message: "manager delete with success"})
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}

exports.removeAll = (req, res) => {
	manager.removeAll().then(manager => {
		res.send({message: "managers delete with success"})
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}
