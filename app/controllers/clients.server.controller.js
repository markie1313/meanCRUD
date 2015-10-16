var mongoose = require('mongoose'),
	Client = mongoose.model('Client');
	
var getErrorMessage = function (err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknowner server errorer'
	}
};

exports.create = function (req, res) {
	var client = new Client(req.body);
	client.creator = req.user;
	
	client.save(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(client);
		}
	});
};

exports.list = function (req, res) {
	Client.find().sort('-created').populate('creator', 'clientname').exec(function (err, clients) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(clients);
		}
	});
};

exports.clientByID = function (req, res, next, id) {
	Client.findById(id).populate('creator', 'clientname').exec(function (err, client) {
		if (err) return next(err);
		if (!client) return next(new Error('Failed to load client ' + id));
		
		req.client = client;
		next();
	});
};

exports.read = function (req, res) {
	res.json(req.client);
};

exports.update = function (req, res) {
	var client = req.client;
	
	client.clientname = req.body.clientname;
	client.clienturl = req.body.clienturl;
	client.internalip = req.body.internalip;
	client.dbase = req.body.dbase;
	client.dbname = req.body.dbname;
	client.webserver = req.body.webserver;
	client.externalIP = req.body.externalIP;
	client.sqlIP = req.body.sqlIP;
	client.hasSSL = req.body.hasSSL;
	client.hasPreferred = req.body.hasPreferred;
	client.isParty = req.body.isParty;
	
	client.save(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(client);
		}
	});
};

exports.delete = function (req, res) {
	var client = req.client;
	
	client.remove(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(client);
		}
	});
};

exports.hasAuthorization = function (req, res, next) {
	if (req.client.creator.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized 2'
		});
	}
	next();
};