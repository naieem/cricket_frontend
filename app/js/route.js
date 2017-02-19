(function() {
    'use strict';
    angular
        .module('cricket')
        .config(config);

    function config($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
            url: '/',
            templateUrl: 'template/home.html',
            controller: 'homeController',
            controllerAs: 'home'
        })

        // nested list with custom controller
        // .state('home.list', {
        //     url: '/list',
        //     templateUrl: 'template/partial-home-list.html',
        //     controller: function($scope) {
        //         $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        //     }
        // })

        // // nested list with just some random string data
        // .state('home.paragraph', {
        //     url: '/paragraph',
        //     template: 'I could sure use a drink right now.'
        // })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        // .state('about', {
        //     url: '/about',
        //     templateUrl: 'template/matches.html',
        //     // views: {
        //     //     '': { templateUrl: 'template/partial-about.html' },
        //     //     'columnOne@about': { template: 'Look I am a column!' },
        //     //     'columnTwo@about': {
        //     //         templateUrl: 'template/table-data.html',
        //     //         controller: 'scotchController'
        //     //     }
        //     // }
        //     controller: function() {
        //         this.title = 'My Contacts';
        //     },
        //     controllerAs: 'contact'

        // });

        .state('matches', {
            url: '/matches',
            templateUrl: 'template/matches.html',
            controller: 'allMatchesController',
            controllerAs: 'matches'
        })

        .state('details', {
            url: '/matches/details/:matchId',
            templateUrl: 'template/matchDetails.html',
            controller: 'matchDetails',
            controllerAs: 'details',
            // resolve: {
            //     user: function($stateParams,$http) {
            //         $http.get("http://localhost:3000/crud/details/" + $stateParams.matchId)
            //             .then(function(response) {
            //                 return response.data;
            //                 // if (vm.matchDetails.totalRun === 0) {
            //                 //     vm.hideDetails = true;
            //                 //     vm.message = "Match Abandoned Without a ball being bowled";
            //                 // }
            //             });
            //     }
            // }
        })

        .state('detailsByOverBall', {
            url: '/matches/details/:matchId/:over/:ball',
            templateUrl: 'template/matchDetailsByOverBall.html',
            controller: 'matchDetailsByOverBall',
            controllerAs: 'details'
        });
    }
})();
