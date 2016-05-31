angular.module('webcamApp').config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    //RestangularProvider.setBaseUrl("http://foaas.com/");

    //RestangularProvider.setDefaultHeaders({'Content-Type' : 'application/json'});

    _.contains = _.includes;

    $stateProvider.state('home', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'views/index.html'
    })

    $stateProvider.state('webcams', {
        url: '/operations',
        templateUrl: 'views/webcam.html',
        controller: 'WebcamCtrl'
    })
});
