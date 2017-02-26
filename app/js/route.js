(function() {
    'use strict';
    var stateprovider = null;
    var route = "../route.json";
    angular
        .module('cricket')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        stateprovider = $stateProvider;
        $urlRouterProvider.otherwise('/');
    }

    angular
        .module('cricket').run(["$http", "$state", function($http, $state) {
            $http.get(route).then(function(response) {
                console.log(response);
                angular.forEach(response.data, function(value, key) {
                    console.log(value.controller);
                    var state = value;
                    stateprovider.state(value.name, state);
                    if (value.default) {
                        $state.go(value.name);
                    }
                });
            });

        }]);
})();
