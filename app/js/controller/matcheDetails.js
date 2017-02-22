(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('matchDetails', matchDetails);

    matchDetails.$inject = ['$http', '$stateParams', 'Service'];

    function matchDetails($http, $stateParams, Service) {
        var vm = this;
        vm.title = 'Match Details';
        vm.matchid = $stateParams.matchId;
        vm.hideDetails = false;
        Service.matchDetails(vm.matchid).then(function(response) {
            console.log(response);
            vm.matchDetails = response.matchDetails;
            if (vm.matchDetails.totalRun === 0) {
                vm.hideDetails = response.hideDetails;
                vm.message = response.message;
            }
        });
    }

})();
