angular.module('webcamApp').service("WebcamService", ['Restangular', function (Restangular) {

    Restangular.setDefaultHeaders({
        'Content-Type' : 'application/json',
    });

    this.getList = function(key) {
        var map = {
            webcams: 'http://localhost:3000/webcams',
        };

        return Restangular.allUrl('searchAll', map[key]).getList().then(function(response){
            return response;
        });
    };
}]);