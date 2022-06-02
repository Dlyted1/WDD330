window.onload = function() {

    var getText = document.getElementById("getTxt");

    var content = document.getElementById("content");

    var xhr = new XMLHttpRequest();
        getText.addEventListener("click",function() {
            xhr.addEventListener('readystatechange',function(){
                content.innerHTML = this.responseText;
             });
             xhr.open("GET","hello.txt",true);
             xhr.send();
        });

    
};