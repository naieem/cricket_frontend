(function() {
    'use strict';

    angular
        .module('cricket')
        .service('Service', Service);

    Service.$inject = ['$http', '$q'];

    function Service($http, $q) {
        var savedTeams = {};
        var matchId = "";
        var toss = "";

        var service = {
            setTeams: setTeams,
            getTeams: getTeams,
            setMatchId: setMatchId,
            getMatchId: getMatchId,
            setToss: setToss,
            getToss: getToss,
            deleteMatch: deleteMatch,
            getAllMatches: getAllMatches
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

        function deleteMatch(id) {
            return $q(function(resolve, reject) {
                $http.post("http://localhost:3000/crud/delete", { 'id': id }).then(function(response) {
                    resolve(response.data);
                });

            });
        }

        function getAllMatches() {
            var obj = {};
            obj.error="";
            return $q(function(resolve, reject) {
                $http.get("http://localhost:3000/crud/matches")
                    .then(function(response) {
                        obj.matchelist = response.data;
                        obj.matchLoading = false;
                        obj.totalItems = obj.matchelist.length;
                        if (obj.totalItems == 0)
                            obj.error = "No Match Found";
                        resolve(obj);
                    });
            });
        }
    }

})();
