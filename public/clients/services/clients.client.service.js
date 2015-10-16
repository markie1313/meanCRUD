angular.module('clients').factory('Clients', ['$resource', function ($resource) {
	return $resource('api/clients/:clientId', {
		articleId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
}]);