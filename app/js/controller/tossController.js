(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('tossController', tossController);

    tossController.$inject = ['$http', 'Service','$state'];

    function tossController($http, Service,$state) {
        var vm = this;
        vm.teams = Service.getTeams();
        vm.toss = "";
        vm.selectTeam = function(name) {
            console.log(name);
            vm.toss = name;
        }
        vm.play = function($event) {
            $event.preventDefault();
            var obj = {
                'teams': vm.teams,
                'toss': vm.toss
            }
            $http.post("http://localhost:3000/crud/toss", obj)
                .then(function(response) {
                    console.log(response.data);
                    Service.setMatchId(response.data._id);
                    Service.setToss(vm.toss);
                    $state.go('play');
                });

        }
    }

})();
