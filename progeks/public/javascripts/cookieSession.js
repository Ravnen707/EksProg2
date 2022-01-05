

document.getElementById("loginSave").onclick = function() {
    sessionStorage.username = "Andreas";
    sessionStorage.password = "Ravn";

    Object.keys(sessionStorage);

    location.href =" http://localhost:3000/api.html";
}

