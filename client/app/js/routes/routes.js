(function(angular) {
    'use strict';

    angular
        .module('kwik')
        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                debugger;
                // To remove # tag from url
                // $locationProvider.html5Mode(true);

                //default route
                $urlRouterProvider.otherwise('/home');

                $stateProvider
                    .state('home', {
                        url: '/home',
                        templateUrl: 'templates/home.html',
                        controller: 'homeCtrl',
                        data: {
                            pageTitle: 'Home'
                        },
                        resolve: {
                            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'kwik',
                                    files: [
                                        'js/main.min.js'
                                    ]
                                });
                            }]
                        }
                    });
                $stateProvider
                    .state('videos', {
                        url: '/videos',
                        templateUrl: 'templates/videos.html',
                        controller: 'videoCtrl',
                        data: {
                            pageTitle: 'Videos'
                        },
                        resolve: {
                            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'kwik',
                                    files: [
                                        'js/main.min.js'
                                    ]
                                });
                            }]
                        }
                    })
                $stateProvider
                    .state('videodetails', {
                        url: '/videodetails/:videoId',
                        templateUrl: 'templates/video-detail.html',
                        controller: 'videoDetailCtrl',
                        data: {
                            pageTitle: 'Product'
                        },

                        resolve: {
                            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load({
                                    name: 'kwik',
                                    files: [
                                        'js/main.min.js'
                                    ]
                                });
                            }]
                        }
                    });
            }
        ]);
})(angular);
