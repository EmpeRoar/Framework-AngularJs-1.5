"use strict";

angular.module('app').factory('dataService',
    ['$timeout',
        function ($timeout) {

            var locations = [
                {
                    id: 1000,
                    name: 'Raquette River',
                    temperature: 55,
                    guides: 20,
                    rafts: 18,
                    vest: 200,
                    image: 'pic2.jpg'
                },
                {
                    id: 1001,
                    name: 'Black River',
                    temperature: 53,
                    guides: 36,
                    rafts: 22,
                    vest: 250,
                    image: 'pic.jpg'
                }
            ];


            var employees = [
                {
                    id: 5000,
                    name: 'Andy Chatterton',
                    location: 'Raquette River',
                    image: 'pic.jpg'
                },
                {
                    id: 5001,
                    name: 'Julius Bacosa',
                    location: 'Raquette River',
                    image: 'pic2.jpg'
                }
            ];

            var getLocations = function () {
                return $timeout(function () {
                    return locations;
                }, 500);
            };

            var getLocation = function (id) {
                var timeout = $timeout(function () {
                    //$timeout.cancel(timeout);
                    //return undefined;

                    for (var i = 0; i < locations.length; i++)
                        if (locations[i].id == id)
                            return locations[i];
                    return undefined;
                }, 300);

                return timeout;
            };

            var getEmployees = function () {
                return $timeout(function () {
                    return employees; 
                }, 200);
            };

            var getEmployee = function (id) {
                return $timeout(function () {
                    for (var i = 0; i < employees.length; i++)
                        if (employees[i].id == id)
                            return employees[i];
                    return undefined;

                }, 300);
            };

            return {
                getLocations: getLocations,
                getLocation: getLocation,
                getEmployees: getEmployees,
                getEmployee: getEmployee
            }


        }])