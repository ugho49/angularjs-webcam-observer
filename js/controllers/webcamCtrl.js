angular.module('webcamApp').controller('WebcamCtrl', ['$scope', 'operations', function($scope, operations) {
    $scope.operations = operations;
}]);
