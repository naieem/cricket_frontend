(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('homeController', homeController);

    homeController.$inject = ['$http','Service'];

    function homeController($http,Service) {
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
        vm.teamTotal=0;
        vm.selectTeam=function(th){
            if(th.tm){
                vm.selectedTeams.push(th.team);
            }
            else{
                vm.selectedTeams.splice(vm.selectedTeams.indexOf(th.team),1);
            }
            vm.teamTotal=vm.selectedTeams.length;
            Service.setTeams(vm.selectedTeams);
        }
    }

})();
