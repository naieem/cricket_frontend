(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('tossController', tossController);

    tossController.$inject = ['$http', 'Service', '$state'];

    function tossController($http, Service, $state) {
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
            Service.startPlay(obj).then(function(response) {
                console.log(response);
                Service.setMatchId(response);
                Service.setToss(vm.toss);
                $state.go('play');
            })

        }
    }

})();
