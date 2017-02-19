(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('matchDetailsByOverBall', matchDetailsByOverBall);

    matchDetailsByOverBall.$inject = ['$http', '$stateParams'];

    function matchDetailsByOverBall($http, $stateParams) {
        var vm = this;
        vm.title = 'Match Details';
        vm.matchid = $stateParams.matchId;
        vm.over = $stateParams.over;
        vm.ball = $stateParams.ball;
        vm.hideDetails = false;
        $http.get("http://localhost:3000/crud/details/" + vm.matchid+"/"+vm.over+"/"+vm.ball)
            .then(function(response) {
                vm.matchDetails = response.data;
                if (vm.matchDetails.totalRun === 0) {
                    vm.hideDetails = true;
                    vm.message = "Match Abandoned Without a ball being bowled";
                }
            });

        // $http.post("http://localhost:3000/add", {
        //         'name': "supto"
        //     })
        //     .then(function(response) {
        //         console.log(response);
        //     });
    }

})();
