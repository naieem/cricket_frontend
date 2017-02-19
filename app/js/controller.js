(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('AvengersController', cricketController);

    cricketController.$inject = ['$http'];

    function cricketController($http) {
        var vm = this;
        vm.message = 'test';

        vm.lists = [{
            name: 'Macallan 12',
            price: 50
        }, {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        }, {
            name: 'Glenfiddich 1937',
            price: 20000
        }];

        // $http.get("http://localhost:3000/naieem")
        //     .then(function(response) {
        //         vm.myWelcome = response.data;
        //     });

        // $http.post("http://localhost:3000/add", {
        //         'name': "supto"
        //     })
        //     .then(function(response) {
        //         console.log(response);
        //     });
    }

})();
