const Golf = require('../models/golf.model')
const bcrypt = require('bcrypt')


exports.create = (req, res) => {
	let heshedPassword = bcrypt.hasgSync(req.body.password, 8);
	console.log(heshedPassword)
	const golf = new Golf({
		titre: req.body.titre,
		latitude: req.body.latitude,
		longitude: req.body.longitude,
		description: req.body.description,
		manager: req.body.manager
	})

	golf.save().then(data => {
		res.send(data)
	}).catch(err => {
		res.status(500).send({
			message: err.message
		})
		console.log(err)
	})
}

exports.all = (req, res) => {
	golf.find().then(golfs => {
		res.send(golfs)
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some errors occured when finding golfs"
		})
	})
}

exports.findOne = (req, res) => {
	golf.findById(req.param.id).then(golf => {
		if (!golf) {
			return res.status(404).send({
				message: 'golf not found'
			})
		}
		res.send(golf)
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}

exports.updateOne = (req, res) => {
	golf.findByIdAndUpdate(req.param.id, req.body).then(golf => {
		if (!golf) {
			return res.status(404).send({
				message: 'golf not found'
			})			
		}
		res.send(golf)
		golf.findById(req.param.id).then(newgolf => {
			res.send(newgolf)
		})
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}

exports.removeOne = (req, res) => {
	golf.findByIdAndRemove(req.params.id).then(golf => {
		res.send({message: "golf delete with success"})
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}

exports.removeAll = (req, res) => {
	golf.removeAll().then(golf => {
		res.send({message: "golfs delete with success"})
	}).catch(err => {
		res.statut(500).send({message : err.message})
	})
}
