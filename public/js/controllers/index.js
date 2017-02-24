'use strict';

angular.module('ds.controllers.index', []).

controller('HeadCtrl', function ($scope, socket, $location) {
    var device = window.deviceType;
    $scope.deviceType = device;

    // Testpfad
   // $location.path('/hbc/remote');
    //

    socket.on('pair:init', function() {
        socket.emit('pair:deviceType', { deviceType: device });
    });
}).
// global controller
controller('GlobalCtrl', function($scope, $route, $timeout, $rootScope, $location, socket, $window) {
    $scope.showMobileNav = false;
    $scope.$route = $route;

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.historyBack = function () {
        $window.history.back();

    };
    $scope.goToHome = function () {
        $location.path('/');
    }

    $scope.goToAbout = function () {
        $location.path('/ds/about');
    }
    $scope.goToProjects = function () {
        $location.path('/ds/projects');
    }


    // SUBNAV
    $scope.moveTo = function (id) {
        $.fn.fullpage.moveTo(id);
    };






});

