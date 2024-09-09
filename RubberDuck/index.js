function addProblem() {
    const newProblem = document.getElementById("newProblem").value;
    if (newProblem === "") return; // Avoid adding empty items
    const newLi = document.createElement("li");
    newLi.textContent = newProblem;

    document.getElementById("problemList").appendChild(newLi);
    document.getElementById("newProblem").value = "";

    saveToLocalStorage(newProblem);
}

function addPraise() {
    const newPraise = document.getElementById("newPraise").value;

    if (newPraise === "") return;

    let praises = Array.from(document.getElementById("praiseList").getElementsByTagName("li"));
    const toDelete = praises.find((element) => element.textContent === newPraise);
    if (toDelete) {
        const removed = document.getElementById("praiseList").removeChild(toDelete);
        console.log("Element removed - " + removed.textContent)
        return;
    }

    const newLi = document.createElement("li");
    newLi.textContent = newPraise;
    document.getElementById("praiseList").appendChild(newLi);

    saveToLocalStorage(newPraise);

    document.getElementById("newPraise").value = "";
}



document.getElementById("addProblem").addEventListener("click", addProblem);

document.getElementById("addPraise").addEventListener("click", function () {
    addPraise();
});

document.getElementById("newProblem").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addProblem();
    }
});

//Hover effect
const button = document.getElementById("addProblem");
const picture = document.getElementById("easterEgg");

button.addEventListener("mouseout", function () {
    picture.classList.remove("visible");
    picture.classList.add("hidden");
});

button.addEventListener("mouseover", function () {
    picture.classList.remove("hidden");
    picture.classList.add("visible");
});


//Local storage
function saveToLocalStorage(problem) {
    let problems = JSON.parse(localStorage.getItem("problems")) || [];
    problems.push(problem);
    localStorage.setItem("problems", JSON.stringify(problems));
}

function loadFromLocalStorage() {
    let problems = JSON.parse(localStorage.getItem("problems")) || [];
    problems.forEach(problem => {
        const newLi = document.createElement("li");
        newLi.textContent = problem;
        document.getElementById("pastList").appendChild(newLi);
    });
}

window.onload = function () {
    loadFromLocalStorage();
}