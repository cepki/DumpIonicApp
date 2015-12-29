angular.module("scheduleApp", ["ionic", "ngMessages", 'ionic-datepicker'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });


})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('home', {
        abstract: true,
        url: "/home",
        templateUrl: "/app/home/home-layout.html",
        controller: "HomeController as vm",
    })
    
    .state('home.main', {
        url: "/main",
        views: {
            "mainContentForHome": {
                templateUrl: "/app/home/home.html"
            }
        }
    })

    .state('event', {
        abstract: true,
        url: "/event",
        templateUrl: "/app/event/event-layout.html",
        controller: "NewEventController as vm",
    })

    .state('event.newEvent', {
        url: '/newevent',
        views: {
            "mainContent": {
                templateUrl: "/app/event/newEvent/new-event.html"
            }
        },
    });
    $urlRouterProvider.otherwise('/home/main');
});