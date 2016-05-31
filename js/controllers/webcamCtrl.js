angular.module('webcamApp').controller('WebcamCtrl', ['$scope', '$interval', 'webcams',
    function($scope, $interval, webcams) {

        $interval(reloadWebcam, 1000);

        reloadWebcam();

        function reloadWebcam(){
            $scope.webcams = addTimestamp(webcams);
        }

        function addTimestamp(webcams) {
            return _.cloneDeep(webcams).map(function(webcam){
                webcam.url += +new Date();
                return webcam;
            });
        }
    }
]);