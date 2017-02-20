(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('allMatchesController', allMatchesController);

    allMatchesController.$inject = ['$http'];

    function allMatchesController($http) {
        var vm = this;
        vm.title = 'All Match List';
        // console.log(vm);

        // vm.lists = [{
        //     name: 'Macallan 12',
        //     price: 50
        // }, {
        //     name: 'Chivas Regal Royal Salute',
        //     price: 10000
        // }, {
        //     name: 'Glenfiddich 1937',
        //     price: 20000
        // }];

        $http.get("http://localhost:3000/crud/matches")
            .then(function(response) {
                vm.matchelist = response.data;
            });

        // $http.post("http://localhost:3000/add", {
        //         'name': "supto"
        //     })
        //     .then(function(response) {
        //         console.log(response);
        //     });
    }

})();
