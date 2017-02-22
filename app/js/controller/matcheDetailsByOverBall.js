(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('matchDetailsByOverBall', matchDetailsByOverBall);

    matchDetailsByOverBall.$inject = ['$http', '$stateParams', 'Service'];

    function matchDetailsByOverBall($http, $stateParams, Service) {
        var vm = this;
        vm.title = 'Match Details';
        vm.matchid = $stateParams.matchId;
        vm.over = $stateParams.over;
        vm.ball = $stateParams.ball;
        vm.hideDetails = false;
        Service.matchDetailsByOverBall(vm.matchid, vm.over, vm.ball).then(function(response) {
            console.log(response);
            vm.matchDetails = response.matchDetails;
            if (vm.matchDetails.totalRun === 0) {
                vm.hideDetails = response.hideDetails;
                vm.message = response.message;
            }
        });
    }

})();
