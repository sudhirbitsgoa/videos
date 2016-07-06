(function(angular) {
    "use strict";

    angular
        .module('kwik')
        .controller('videoDetailCtrl', ['$scope', '$stateParams', 'AppCoreService',
            function($scope, $stateParams, appCoreService) {
                appCoreService.getVideoById('RpUgnb1jODlK8igrYXDaEczlqu2k8145', $stateParams.videoId)
                  .then(function(data) {
                      $scope.video = data;
                  });
            }
        ]);
})(angular);
