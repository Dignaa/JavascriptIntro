let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errorList = document.getElementById("errorList");

    if (errorList) { errorList.innerHTML = ''; }

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name.length < 2 || name.length > 20) {
        errorList = setError("This name is not valid")
    }
    if (email.includes("@cphbusiness.dk")) {
        const pattern = /cph-[a-zA-Z]{2}\d{3}@cphbusiness\.dk/;
        alert("got in")
        if (!pattern.test(email)) { setError("This email is not a valid CphBusiness email") }
    }
    if (!email.includes("@") || email.length < 5) {
        errorList = setError("This email is not valid")
    }

    if (password.length < 4) {
        errorList = setError("This password is not valid")
    }
    if (errorList.childElementCount > 0) { return; }
    saveToLocalStorage(name);
    alert(`Hello there, ${name}, your name is saved.`)

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

});

function setError(error) {
    const errorList = document.getElementById("errorList");
    const newP = document.createElement("h5");
    newP.textContent = error;
    newP.setAttribute("id", "error");
    errorList.appendChild(newP);

    return errorList;
}

//Local storage
function saveToLocalStorage(name) {
    let names = JSON.parse(localStorage.getItem("names")) || [];
    names.push(name);
    localStorage.setItem("names", JSON.stringify(names));
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errorList = document.getElementById("errorList");

    if (errorList) { errorList.innerHTML = ''; }

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name.length < 2 || name.length > 20) {
        errorList = setError("This name is not valid")
    }
    if (email.includes("@cphbusiness.dk")) {
        const pattern = /cph-[a-zA-Z]{2}\d{3}@cphbusiness\.dk/;
        alert("got in")
        if (!pattern.test(email)) { setError("This email is not a valid CphBusiness email") }
    }
    if (!email.includes("@") || email.length < 5) {
        errorList = setError("This email is not valid")
    }

    if (password.length < 4) {
        errorList = setError("This password is not valid")
    }
    if (errorList.childElementCount > 0) { return; }
    saveToLocalStorage(name);
    alert(`Hello there, ${name}, your name is saved.`)

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

});

function setError(error) {
    const errorList = document.getElementById("errorList");
    const newP = document.createElement("h5");
    newP.textContent = error;
    newP.setAttribute("id", "error");
    errorList.appendChild(newP);

    return errorList;
}

//Local storage
function saveToLocalStorage(name) {
    let names = JSON.parse(localStorage.getItem("names")) || [];
    names.push(name);
    localStorage.setItem("names", JSON.stringify(names));
}