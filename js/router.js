angular.module('webcamApp').config(function($stateProvider, $urlRouterProvider) {

    _.contains = _.includes;

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('home', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'views/index.html'
    });

    $stateProvider.state('webcams', {
        url: '/webcams',
        templateUrl: 'views/webcam.html',
        resolve: {
            webcams: function(WebcamService) {
                return WebcamService.getMessage('Birth');
            }
        },
        controller: 'WebcamCtrl'
    });
});
