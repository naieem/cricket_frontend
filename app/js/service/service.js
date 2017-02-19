(function() {
    'use strict';

    angular
        .module('cricket')
        .service('Service', Service);

    Service.$inject = ['$http'];

    function Service($http) {
        var savedTeams = {};
        var matchId="";
        var toss="";

        var service = {
            setTeams: setTeams,
            getTeams: getTeams,
            setMatchId: setMatchId,
            getMatchId: getMatchId,
            setToss: setToss,
            getToss: getToss
        };

        return service;

        ////////////

        function setTeams(data) {
            savedTeams = data;
        }

        function getTeams() {
            return savedTeams;
        }

        function setMatchId(data) {
            matchId = data;
        }

        function getMatchId() {
            return matchId;
        }
        function setToss(data) {
            toss = data;
        }

        function getToss() {
            return toss;
        }
    }

})();
