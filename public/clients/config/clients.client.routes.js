angular.module('clients').config(['$routeProvider', 
	function ($routeProvider) {
		$routeProvider.
		when('/clients', {
			templateUrl: 'clients/views/list-clients.client.view.html'
		}).
		when('/clients/create', {
			templateUrl: 'clients/views/create-client.client.view.html'
		}).
		when('/clients/:clientId', {
			templateUrl: 'clients/views/view-client.client.view.html'
		}).
		when('/clients/:clientId/edit', {
			templateUrl: 'clients/views/edit-client.client.view.html'
		});
	}
]);