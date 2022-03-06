
const json = require(JSON/novels.json)
//var novelInfo = JSON.parse(novels.json)
function test(){
    document.getElementById("novelTitle").innerHTML = novelInfo[0].name;
    alert(novelInfo[0].name);
    console.log("I WORK");
};
/*
function populateSelect() {
    console.log("Test Success")
    // CREATE AN XMLHttpRequest OBJECT, WITH GET METHOD.
    var xhr = new XMLHttpRequest(), 
        method = 'GET',
        overrideMimeType = 'application/json',
        url = '../JSON/novels.json';        // ADD THE URL OF THE FILE.

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            
            // PARSE JSON DATA.
            var novelInfo = JSON.parse(xhr.responseText);

            var ele = document.getElementById('novelTitles');
            for (var i = 0; i < novelInfo.length; i++) {
                if(novelInfo[i].title == "Reverend Insanity"){
                    // BIND DATA TO <select> ELEMENT.
                ele.innerHTML = novelInfo[i].title;
                }
            }
        }
    }
    xhr.open(method, url, true);
    xhr.send();
}
*/