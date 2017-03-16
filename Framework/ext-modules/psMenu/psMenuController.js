"use strict";

angular.module('psMenu').controller('psMenuController',
    ['$scope', '$rootScope',
        function ($scope, $rootScope) {

            $scope.isVertical = true;

            $scope.showMenu = true;

            this.getActiveElement = function () {
                return $scope.activeElement;
            }

            this.setActiveElement = function (el) {
                $scope.activeElement = el;
            };

            this.isVertical = function () {
                return $scope.isVertical;
            }

            this.setRoute = function (route) {
                $rootScope.$broadcast('ps-menu-item-selected-event',
                    { route: route });
            };

            this.setOpenMenuScope = function (scope) {
                $scope.openMenuScope = scope;
            };

            $scope.toggleMenuOrientation = function () {

                //close any open menu
                if ($scope.openMenuScope)
                    $scope.openMenuScope.closeMenu();

                $scope.isVertical = !$scope.isVertical;

                $rootScope.$broadcast('ps-menu-orientation-change-event',
                    { isMenuVertical: $scope.isVertical });
            };

            // this is binding to jquery click
            angular.element(document).bind('click', function (e) {
                if ($scope.openMenuScope && !$scope.isVertical) {
                    if ($(e.target).parent().hasClass('ps-selectable-item'))
                        return;

                    //must apply if bind from jquery
                    $scope.$apply(function () {
                        $scope.openMenuScope.closeMenu();
                    });
                    e.preventDefault();
                    e.stopPropagation();

                }
            });

            $scope.$on('ps-menu-show', function (evt, data) {
                $scope.showMenu = data.show;
            });
        }
    ]);