(function() {
    // loadFile.loadFile("js/controller/playController.js").then(function(response) {
    //     console.log(response);
    // });
    var url = "js/controller/";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'controller.json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var controllers = JSON.parse(xhr.responseText);
            // console.log(controllers);
            for (var i = 0; i < controllers.length; i++) {
                loadFile.loadFile(url + controllers[i].name + ".js").then(function(response) {
                    console.log(response);
                });
            }
        } else {
            console.log(xhr.status);
        }
    };
    xhr.send();
})(window.loadFIle, window.angular)
