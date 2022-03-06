let main = document.getElementById('main')

function getBiscuit(bname) {
    let name = bname + "=";
    let decodedBiscuit = decodeURIComponent(document.cookie);
    let biscuit = decodedBiscuit.split(';');
    for (let i = 0; i < biscuit.length; i++) {
        let theBiscuit = biscuit[i];
        while (theBiscuit.charAt(0) == ' ') {
            theBiscuit = theBiscuit.substring(1);
        }
        if (theBiscuit.indexOf(name) == 0) {
            return theBiscuit.substring(name.length, theBiscuit.length);
        }
    }
    return "not a biscuit";
}

window.onload = function() {
    if (getBiscuit("darkmode") == 'y') {
        main.classList.add("dark-mode");
        document.getElementById("darkmode-check").checked = true;
    } else {
        document.cookie = "darkmode=n; expires=Thu, 18 Dec 2022 12:00:00 UTC"
    }

}

function darkmode() {
    if (getBiscuit("darkmode") == 'y') {
        document.cookie = "darkmode=;"
        document.cookie = "darkmode=n; expires=Thu, 31 Dec 2022 12:00:00 UTC"
        main.classList.remove("dark-mode");
    } else {
        document.cookie = "darkmode=;"
        document.cookie = "darkmode=y; expires=Thu, 31 Dec 2022 12:00:00 UTC"
        main.classList.add("dark-mode");
    }
}
