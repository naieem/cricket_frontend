(function() {
    'use strict';

    angular
        .module('cricket', ['ui.router', 'ui.bootstrap']);
    angular.element(function() {
        angular.bootstrap(document, ['cricket']);
    });
})();
