(function(angular) {
    "use strict";

    function average($log) {
        return function(array) {
            if (!angular.isArray(array) || array.length === 0) {
                $log.error("Expect array.");
                return;
            }

            var sum = 0;
            angular.forEach(array, function(value) {
                if (!angular.isNumber(value)) {
                    $log.error("Expect number.");
                    return;
                }
                sum += value;
            });

            return sum / array.length;
        };
    }
    angular
        .module('kwik')
        .controller('videoCtrl', ['$scope', '$stateParams', 'AppCoreService', '$location', '$state',
            function($scope, $stateParams, appCoreService, $location, $state) {
                $scope.limit = 10;
                $scope.current = 10;
                if(!appCoreService.sessionId) {
                    $state.go('home');
                    return;
                }
                appCoreService.getVideos(appCoreService.sessionId, 0, 10).then(function(data) {
                    $scope.videos = data.data || [];
                });

                $scope.showVideo = function(video) {
                    $state.go('videodetails', {
                        videoId: video._id
                    });
                };

                $scope.myPagingFunction = function() {
                  if($scope.videos && $scope.videos.length <= $scope.current) {
                    appCoreService.getVideos(appCoreService.sessionId, $scope.current, 10).then(function(data) {
                        $scope.current += $scope.limit;
                        $scope.videos = $scope.videos.concat(data.data);
                    });
                  } else {
                    $scope.current = $scope.videos && $scope.videos.length || 10;
                  }
                };
            }
        ])
        .filter("average", ["$log", average]);
})(angular);
