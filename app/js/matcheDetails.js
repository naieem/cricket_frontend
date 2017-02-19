(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('matchDetails', matchDetails);

    matchDetails.$inject = ['$http', '$stateParams'];

    function matchDetails($http, $stateParams) {
        var vm = this;
        vm.title = 'Match Details';
        vm.matchid = $stateParams.matchId;
        vm.hideDetails = false;
        $http.get("http://localhost:3000/crud/details/" + vm.matchid)
            .then(function(response) {
                vm.matchDetails = response.data;
                if (vm.matchDetails.totalRun === 0) {
                    vm.hideDetails = true;
                    vm.message = "Match Abandoned Without a ball being bowled";
                }
            });
        // console.log(user);
        // $http.post("http://localhost:3000/add", {
        //         'name': "supto"
        //     })
        //     .then(function(response) {
        //         console.log(response);
        //     });
    }

})();
