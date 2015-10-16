var users = require('../../app/controllers/users.server.controller'),
	client = require('../../app/controllers/clients.server.controller');
	
module.exports = function (app) {
	app.route('/api/clients')
		.get(clients.list)
		.post(users.requiresLogin, clients.create);
	
	app.route('/api/clients/:clientId')
		.get(clients.read)
		.put(users.requiresLogin, clients.hasAuthorization, clients.update)
		.delete(users.requiresLogin, clients.hasAuthorization, clients.delete);
		
	app.param('clientId', clients.clientByID);
};