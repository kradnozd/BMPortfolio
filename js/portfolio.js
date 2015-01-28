var BMPixel = angular.module('PortfolioApp', []);

BMPixel.factory('MyJsonService', function() {
  return $resource('/:data.json', {myFile: '@file'});
});

BMPixel.controller('WorkListCtrl', function(LoadWorks, $http, $scope) {
    LoadWorks.fetch().then(function(data) {
	    $scope.myWorks = data;
	});
});

BMPixel.factory('LoadWorks', function($q, $timeout, $http) {
    var Works = {
        fetch: function() {

            var deferred = $q.defer();

            $timeout(function() {
                $http.get('data.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        }
    }

    return Works;
});