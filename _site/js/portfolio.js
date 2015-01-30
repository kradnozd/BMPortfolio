var BMPixel = angular.module('PortfolioApp', []);

BMPixel.controller('PortfolioCtrl', function($scope, $http) {
    $http.get('data.json')
        .success(function(res) {
            $scope.portfolioData = res;
        });
});

BMPixel.controller('TeamCtrl', function($scope, $http) {
    $http.get('team.json')
        .success(function(res) {
            $scope.teamData = res;
        });
});