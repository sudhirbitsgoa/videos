(function(angular) {
    'use strict';

    angular
        .module('kwik')
        .service('AppCoreService', ['$q', '$http', '$rootScope',
            function($q, $http, $rootScope) {
                // Base rest Url
                var baseUrl = "http://localhost:3000/";

                this.login = function(username, password) {
                    var dfd = $q.defer();

                    $http({
                        url: baseUrl + 'user/auth',
                        method: 'POST',
                        data: {
                            username: username,
                            password: password
                        }
                    }).then(function(result) {
                        dfd.resolve(result.data);
                        $rootScope.sessionId = result.data.sessionId;
                    }, function(err) {
                        dfd.reject(err);
                    });

                    return dfd.promise;
                };

                this.logout = function(sessionId) {
                    var dfd = $q.defer();
                    $rootScope.sessionId = null;
                    $http({
                        method: 'GET',
                        url: baseUrl + 'user/logout?sessionId' + sessionId
                    }).then(function(result) {
                        dfd.resolve(result.data);
                    }, function(err) {
                        dfd.reject(err);
                    });

                    return dfd.promise;
                };

                this.getVideos = function(sessionId, skip, limit) {
                    var dfd = $q.defer();
                    $http({
                        url: baseUrl + 'videos',
                        params: {
                            sessionId: sessionId,
                            skip: skip,
                            limit: limit
                        },
                        method: 'GET'
                    }).then(function(result) {
                        dfd.resolve(result.data);
                    }, function(err) {
                        dfd.reject(err);
                    });

                    return dfd.promise;
                };

                this.getVideoById = function(sessionId, videoId) {
                    var dfd = $q.defer();
                    $http({
                        url: baseUrl + 'videos',
                        params: {
                            sessionId: sessionId,
                            videoId: videoId
                        },
                        method: 'GET'
                    }).then(function(result) {
                        dfd.resolve(result.data);
                    }, function(err) {
                        dfd.reject(err);
                    });

                    return dfd.promise;
                };

                this.updateRating = function(sessionId, videoId, rating) {
                    var dfd = $q.defer();
                    $http({
                        method: 'POST',
                        url: baseUrl + 'video/ratings',
                        params: {
                            sessionId: sessionId
                        },
                        data: {
                            videoId: videoId,
                            rating: rating
                        }
                    });
                    return dfd.promise;
                };
            }
        ]);
})(angular);
