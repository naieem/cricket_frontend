(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('homeController', homeController);

    homeController.$inject = ['$http'];

    function homeController($http) {
        var vm = this;
        vm.message = 'test';

        vm.teams = [{
            name: 'Bangladesh',
            id: 'bd'
        }, {
            name: 'India',
            id: 'ind'
        }, {
            name: 'Pakistan',
            id: 'pak'
        }, {
            name: 'Australia',
            id: 'aus'
        }, {
            name: 'England',
            id: 'eng'
        }, {
            name: 'Sri Lanka',
            id: 'sl'
        }];
        vm.selectedTeams=[];
        vm.selectTeam=function(th){
            // console.log(th);
            if(th.tm){
                vm.selectedTeams.push(th.team);
            }
            else{
                vm.selectedTeams.splice(vm.selectedTeams.indexOf(th.team),1);
            }
            console.log(vm.selectedTeams);
            vm.teamTotal=vm.selectedTeams.length;
        }

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
