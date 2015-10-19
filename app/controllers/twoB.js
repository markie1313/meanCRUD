var TwoA = require('mongoose').model('carla');

exports.create = function (req, res, next) {
	var twoA = new TwoA(req.body);
	
	twoA.save(function (err) {
		if (err) {
			return next(err);
		} else {
			res.json(twoA);
		}
	});
};