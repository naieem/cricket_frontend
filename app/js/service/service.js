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
            getAllMatches: getAllMatches,
            startPlay: startPlay,
            matchDetails: matchDetails,
            matchDetailsByOverBall: matchDetailsByOverBall,
            finishMatch: finishMatch
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
                $http.post("http://185.185.250.55:3000/crud/delete", { 'id': id }).then(function(response) {
                    resolve(response.data);
                });

            });
        }

        function getAllMatches() {
            var obj = {};
            obj.error = "";
            return $q(function(resolve, reject) {
                $http.get("http://185.185.250.55:3000/crud/matches")
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

        function startPlay(info) {
            return $q(function(resolve, reject) {
                $http.post("http://185.185.250.55:3000/crud/toss", info)
                    .then(function(response) {
                        console.log(response.data);
                        resolve(response.data._id);
                    });
            });
        }

        function matchDetails(matchid) {
            var obj = {};
            return $q(function(resolve, reject) {
                $http.get("http://185.185.250.55:3000/crud/details/" + matchid)
                    .then(function(response) {
                        obj.matchDetails = response.data;
                        if (obj.matchDetails.totalRun === 0) {
                            obj.hideDetails = true;
                            obj.message = "Match Abandoned Without a ball being bowled";
                        }
                        resolve(obj);
                    });
            });
        }


        function matchDetailsByOverBall(matchid, over, ball) {
            var obj = {};
            return $q(function(resolve, reject) {
                $http.get("http://185.185.250.55:3000/crud/details/" + matchid + "/" + over + "/" + ball)
                    .then(function(response) {
                        obj.matchDetails = response.data;
                        if (obj.matchDetails.totalRun === 0) {
                            obj.hideDetails = true;
                            obj.message = "Match Abandoned Without a ball being bowled";
                        }
                        resolve(obj);
                    });
            });
        }

        function finishMatch(obj) {
            return $q(function(resolve, reject) {
                $http.post("http://185.185.250.55:3000/crud/runUpdate", obj)
                    .then(function(response) {
                        console.log(response);
                        resolve(response);
                    });
            });
        }

    }

})();
