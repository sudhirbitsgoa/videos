(function(angular) {
    "use strict";

    angular
        .module('kwik')
        .controller('HeaderCtrl', ['$scope', 'AppCoreService', '$state',
            function($scope, appCoreService, $state) {
                $scope.logout = function() {
                  appCoreService.logout(appCoreService.sessionId);
                  $state.go('home');
                };
            }
        ]);
})(angular);
