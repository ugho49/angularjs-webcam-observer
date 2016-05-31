angular.module('webcamApp').controller('WebcamCtrl', ['$scope', 'webcams', function($scope, webcams) {
    $scope.webcams = webcams.message;
}]);