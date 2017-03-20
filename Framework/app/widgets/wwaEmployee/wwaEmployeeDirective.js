"use strict";

angular.module('app').directive('wwaEmployee',
    ['dataService',
        function (dataService) {
            return {
                templateUrl: 'app/widgets/wwaEmployee/wwaEmployeeTemplate.html',
                link: function (scope, el, attrs) {
                    console.log(scope.item.widgetSettings.id);
                    dataService.getEmployee(scope.item.widgetSettings.id)
                        .then(function (data) {
                            console.log(data);
                            scope.selectedEmployee = data;
                        });
                }
            }
        }]);