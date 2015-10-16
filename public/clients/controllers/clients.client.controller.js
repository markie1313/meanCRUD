angular.module('clients').controller('ClientsController', ['$scope', '$routeParams', '$location', 'Authentication', 'Clients', function ($scope, $routeParams, $location, Authentication, Clients) {
				$scope.authentication = Authentication;
				
				$scope.create = function () {
					var client = new Clients({
						clientname: this.clientname,
						clienturl: this.clienturl,
						internalip: this.internalip,
						dbase: this.dbase,
						dbname: this.dbname,
						webserver: this.webserver,
						externalIP: this.externalIP,
						sqlIP: this.sqlIP,
						hasSSL: this.hasSSL,
						hasPreferred: this.hasPreferred,
						isParty: this.isParty
					});
					
					client.$save(function (response) {
						$location.path('clients/' + response._id);
					}, function (errorResponse) {
						$scope.error = errorResponse.data.message;
					});
				};

				$scope.find = function () {
					$scope.clients = Clients.query();
				};

				$scope.findOne = function () {
					$scope.client = Clients.get({
						clientId: $routeParams.clientId
					});
				};

				$scope.update = function () {
					$scope.client.$update(function () {
						$location.path('clients/' + $scope.client._id);
					}, function (errorResponse) {
						$scope.error = errorResponse.data.message;
					});
				};

				$scope.delete = function (client) {
					if (client) {
						client.$remove(function () {
							for (var i in $scope.clients) {
								if ($scope.clients[i] === client) {
									$scope.clients.splice(i, 1);
								}
							}
						});
					} else {
						$scope.client.$remove(function () {
							$location.path('clients');
						});
					}
				};
		}
]);
