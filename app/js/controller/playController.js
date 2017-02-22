(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('playController', playController);

    playController.$inject = ['$http', 'Service'];

    function playController($http, Service) {
        var vm = this;
        vm.message = 'test';
        vm.matchId = Service.getMatchId();
        vm.teams = Service.getTeams();
        vm.toss = Service.getToss();

        /* Bowling calcualtion */
        vm.score = [];
        vm.over = 0;
        vm.ball = 0;
        vm.matchFinished = false;
        vm.showloader = false;
        vm.Bowl = function($event) {
            $event.preventDefault();
            console.log(vm.matchId);
            if (!vm.matchFinished) {
                if (vm.ball >= 6) {
                    vm.over++;
                    vm.ball = 0;
                }
                vm.ball++;
                var run = Math.floor((Math.random() * 7) + 1);
                var obj = {
                    over: vm.over,
                    ball: vm.ball,
                    run: run
                }
                vm.score.push(obj);
                vm.totalRun();
                vm.matchResult();
            }

        }
        vm.totalrun = 0;
        vm.totalRun = function() {
            var totalrun = 0;
            for (var i = 0; i < vm.score.length; i++) {
                totalrun = parseInt(totalrun) + parseInt(vm.score[i].run);
                // console.log(vm.score.run);
            }
            vm.totalrun = totalrun;
            // console.log(vm.score.length);
        }

        vm.matchResult = function() {
            if (vm.over === 1 && vm.ball === 6) {
                var obj = {
                    'bowls': vm.score,
                    'id': vm.matchId
                }
                vm.showloader = true;
                Service.finishMatch(obj).then(function(response) {
                    console.log(response);
                    vm.matchFinished = true;
                    vm.showloader = false;
                });
            }
        }
    }

})();
