var threeA = require('../../app/controllers/twoB');

module.exports = function (app) {
	app.route('/threeA').post(threeA.create);
};