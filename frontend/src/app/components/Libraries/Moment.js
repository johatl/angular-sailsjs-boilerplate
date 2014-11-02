/**
 * Angular service to inject Moment.js library to your controllers.
 *
 * Usage example in controller:
 *
 *  angular
 *      .module('app')
 *      .controller('SomeController',
 *          [
 *              '$scope', 'Moment',
 *              function ($scope, Moment) {
 *                  var date = Moment.utc().format();
 *              }
 *          ]
 *      );
 *
 * With this you can use lo-dash library easily in your controllers.
 */
(function() {
    'use strict';

    angular.module('frontend.components')
        .factory('Moment',
            [
                '$window',
                function service($window) {
                    return $window.moment;
                }
            ]
        );
}());
