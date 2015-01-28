var BMPixel = angular.module('PortfolioApp', []);

BMPixel.factory('MyJsonService', function() {
  return $resource('/:data.json', {myFile: '@file'});
});

BMPixel.controller('WorkListCtrl', function($http, $scope) {
		$http.get('data.json').success(function(data) {
     		$scope.myWorks = data;
     		console.log(myWorks);
    	});
});