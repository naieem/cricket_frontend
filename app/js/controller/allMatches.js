(function() {
    'use strict';

    angular
        .module('cricket')
        .controller('allMatchesController', allMatchesController);

    allMatchesController.$inject = ['$http', 'Service'];

    function allMatchesController($http, Service) {
        var vm = this;
        vm.title = 'All Match List';
        vm.matchLoading = true;
        vm.viewby = 10;
        vm.currentPage = 4;
        vm.itemsPerPage = vm.viewby;
        vm.maxSize = 5; //Number of pager buttons to show
        vm.noData = false;
        Service.getAllMatches().then(function(response) {
            vm.matchelist = response.matchelist;
            vm.matchLoading = response.matchLoading;
            vm.totalItems = response.matchelist.length;
            vm.error = response.error;
            if (response.error != "") {
                vm.noData = true;
            }
        });

        vm.delete = function(id) {
            vm.matchLoading = true;
            Service.deleteMatch(id).then(function(response) {
                console.log(response);
                if (response) {
                    Service.getAllMatches().then(function(response) {
                        vm.matchelist = response.matchelist;
                        vm.matchLoading = response.matchLoading;
                        vm.totalItems = response.matchelist.length;
                        vm.error = response.error;
                        if (response.error != "") {
                            vm.noData = true;
                        }
                    });
                }
            });
        }

    }

})();
