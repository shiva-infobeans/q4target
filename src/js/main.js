var app = angular.module("testApplication", ["ngRoute"]);

app.run(function($rootScope) {
    $rootScope.data = [
	{id: 1, name: 'shiva1', address: 'infobeans1', designation: 'software developer1'},
	{id: 2, name: 'shiva2', address: 'infobeans2', designation: 'software developer2'},
	{id: 3, name: 'shiva3', address: 'infobeans3', designation: 'software developer3'},
	{id: 4, name: 'shiva4', address: 'infobeans4', designation: 'software developer4'}
	];
});

app.controller('controller1', function($scope) {
	$scope.WelcomeMsg = "Hello Everyone!! This is Just a test Application for the q4 targets.";

});


app.controller('controller2', function( $scope, $rootScope) {
	$scope.error = '';
	$scope.name = '';
	$scope.addr = '';
	$scope.desig = '';
	$scope.WelcomeMsg = "Hello Everyone!! This is Just a test Application for the q4 targets.";
	$scope.module = "TEST MODULE FOR ADD";
	$scope.addCustomerData = function() {
		var customer = {};
		if($scope.name == "" || $scope.addr == "" || $scope.desig == "" ){
			$scope.error = "fill correct data";
			return false;
		}
		var temp = $rootScope.data.length;
		customer.id = $rootScope.data[temp-1].id + 1;
		customer.name = $scope.name;
		customer.address = $scope.addr;
		customer.designation = $scope.desig;
		$scope.error = "Added Successfully";
		$rootScope.data.push(customer);
		$scope.name = '';
		$scope.addr = '';
		$scope.desig = '';
	}
	
});


app.controller('controller3', function($scope, $rootScope, $routeParams) {
	var id = $routeParams['id'];
	for(var i=0;i<$rootScope.data.length;i++){
		console.log();
		if(id == $rootScope.data[i].id){
			console.log($rootScope.data[i]);
			$scope.customer = $rootScope.data[i];
		}
	}
	
	$scope.WelcomeMsg = "Hello Everyone!! This is Just a test Application for the q4 targets.";
	$scope.module = "TEST MODULE FOR DETAILS";
	
});



app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.htm"
    })
    .when("/add", {
        templateUrl : "templates/add.htm"
    })
    .when("/details/:id", {
        templateUrl : "templates/details.htm"
    })
    .otherwise({redirectTo: '/'});
});