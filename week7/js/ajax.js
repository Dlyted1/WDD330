window.onload = function() {

    var getText = document.getElementById("getTxt");

    var content = document.getElementById("content");

    var xhr = new XMLHttpRequest();

    xhr.open("GET","hello.txt",true);
    xhr.send();



};