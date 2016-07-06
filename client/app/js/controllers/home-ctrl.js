(function(angular) {
    "use strict";

    angular
        .module('kwik')
        /* Setup App Main Controller */
        .controller('homeCtrl', ['$scope', 'AppCoreService', '$state',
            function($scope, AppCoreService, $state) {
                debugger;
                $scope.login = function() {
                    AppCoreService.login($scope.username, $scope.password).then(function(data) {
                        AppCoreService.sessionId = data.sessionId;
                        $state.go('videos');
                    });
                };
            }
        ]);
})(angular);
