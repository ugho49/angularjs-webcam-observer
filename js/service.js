angular.module('webcamApp').service("WebcamService", ['Restangular', function (Restangular) {

    Restangular.setBaseUrl("http://foaas.com/");

    Restangular.setDefaultHeaders({'Content-Type' : 'application/json'});

    this.message = "default";

    this.getMessage = function(key) {
        var map = {
            Birth: 'off/Robert/Jean',
            Childhood: 'you/Jean/Robert',
            Study: 'this/Christine'
        };

        return Restangular.one(map[key]).get().then(function(response){
            return response;
        });
    };
}]);