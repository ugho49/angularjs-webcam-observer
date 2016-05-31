angular.module('webcamApp').service("service", ['Restangular',
    function (Restangular) {

        this.message = "default";

        this.getMessage = function(key) {
            var map = {
                Birth: 'http://foaas.com/off/Robert/Jean',
                Childhood: 'http://foaas.com/you/Jean/Robert',
                Study: 'http://foaas.com/this/Christine',
                Phd: 'http://foaas.com/that/Alexandre',
                Career: 'http://foaas.com/everything/Simon',
                WorkLife: 'http://foaas.com/everyone/Thomas',
                Pension: 'http://foaas.com/pension/Marine',
                Death: 'http://foaas.com/life/Axel'
            };

            var singleSearch = Restangular.oneUrl('betaSearch', map[key]);

            this.message = singleSearch.get().then(function(response){
                return response.message;
            })
        };
    }]
);