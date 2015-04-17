var moduleDefault = angular.module( "Default", [ 'ngRoute', 'kendo.directives'] );
moduleDefault.config( function ( $routeProvider ) {
    $routeProvider
        .when( '/landing-page', {
            controller: "LandingPage",
            templateUrl: 'html/default/landing-page/index.html'
        })
        .when( '/login', {
            controller: "LandingPage",
            templateUrl: 'html/default/landing-page/login.html'
        })
        .when( '/signup', {
            controller: "LandingPage",
            templateUrl: 'html/signup.html'
        })
        .otherwise( { redirectTo: '/landing-page' } );
});
moduleDefault.controller('LandingPage', [
    '$scope',
    function($scope) {
        var vm = this;
        $scope.pageTitle = 'Landing page';
    }
]);