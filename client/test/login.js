describe('HomeCtrl', function() {
    beforeEach(module('kwik'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        debugger;
        $controller = _$controller_;
    }));

    describe('$scope.grade', function() {
        it('sets the strength to "strong" if the password length is >8 chars', function() {
            var $scope = {};
            debugger;
            $controller('homeCtrl', {
                $scope: $scope
            });
            $scope.username = 'ali';
            $scope.password = '5f4dcc3b5aa765d61d8327deb882cf99';
            $scope.login().then(function(data) {
                expect(data).to.have.key('sessionId');
            });
        });
    });
});
