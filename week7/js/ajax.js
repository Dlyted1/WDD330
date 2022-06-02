window.onload = function() {

    var getText = document.getElementById("getTxt");

    var content = document.getElementById("content");

    var xhr = new XMLHttpRequest();
        getText.addEventListener("click",function() {
            xhr.addEventListener('readystatechange',function(){
                content.innerHTML = this.responseText + '<br />';
             });
             xhr.open("GET","hello.txt",true);
             xhr.send();
        });

    


//grabbing JSON
var getJSON = document.getElementById("getJSON");
var j = new XMLHttpRequest();

getJSON.addEventListener("click",function() {

    j.addEventListener("readystatechange",function() {
        if(this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(j.responseText);

        for(p in data) {
            content.innerHTML += p + ": " + data[p] + '<br />';
        }
      }

    });

    j.open("GET","ajax.JSON",true);
    j.send();
});

};