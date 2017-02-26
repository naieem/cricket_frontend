loadFile = (function() {
    return {
        loadFile: loadFile
    }

    function loadFile(file) {
        // DOM: Create the script element
        return new Promise(function(resolve, reject) {
            var Elm = document.createElement("script");
            // set the type attribute
            Elm.type = "application/javascript";
            // make the script element load file
            Elm.src = file;
            // document.head.appendChild(Elm);
            angular.element('body').append(Elm);
            // angular.element(document.body).append(Elm);
            if (Elm) {
                // var $scope = $rootScope.$new();
                // $compile(Elm)($scope);
                // angular.element('body').append(Elm);
                resolve("File added");
            } else
                reject("failed");
        });
    }
})(window.angular);
