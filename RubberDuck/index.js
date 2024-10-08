function addProblem() {
    const newProblem = document.getElementById("newProblem").value;
    if (newProblem === "") return; // Avoid adding empty items
    if (!profanityFilter(newProblem)) return;
    const newLi = document.createElement("li");
    newLi.textContent = newProblem;
    newLi.title = new Date();

    document.getElementById("problemList").appendChild(newLi);
    document.getElementById("newProblem").value = "";

    saveProblemToLocalStorage(newProblem); // Updated function name
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
    newLi.title = new Date();
    document.getElementById("praiseList").appendChild(newLi);

    savePraiseToLocalStorage(newPraise); // Updated function name

    document.getElementById("newPraise").value = "";
}

// Event listeners
document.getElementById("addProblem").addEventListener("click", addProblem);
document.getElementById("addPraise").addEventListener("click", addPraise);
document.getElementById("newProblem").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addProblem();
    }
});

// Hover effect
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

// Local storage
function saveProblemToLocalStorage(problem) {
    let problems = JSON.parse(localStorage.getItem("problems")) || [];
    problems.push(problem);
    localStorage.setItem("problems", JSON.stringify(problems));
}

function savePraiseToLocalStorage(praise) {
    let praises = JSON.parse(localStorage.getItem("praises")) || [];
    praises.push(praise);
    localStorage.setItem("praises", JSON.stringify(praises));
}

function loadFromLocalStorage() {
    // Load problems
    let problems = JSON.parse(localStorage.getItem("problems")) || [];
    problems.forEach(problem => {
        const newLi = document.createElement("li");
        newLi.textContent = problem;
        document.getElementById("pastList").appendChild(newLi); // Append to past problems list
    });

    // Load praises
    let praises = JSON.parse(localStorage.getItem("praises")) || [];
    praises.forEach(praise => {
        const newLi = document.createElement("li");
        newLi.textContent = praise;
        document.getElementById("pastPraiseList").appendChild(newLi); // Append to past praises list
    });

    // Load names
    let names = JSON.parse(localStorage.getItem("names")) || [];
    return names[names.length - 1];
}

// API fetch
document.getElementById("forceAnswer").addEventListener("click", async () => {
    let joke = document.getElementById("joke");
    joke.classList.add('hidden');
    const loadingDuck = document.getElementById('loadingDuck');
    loadingDuck.classList.remove('hidden');

    await new Promise(r => setTimeout(r, 2000));
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const jokeJson = await response.json();
    loadingDuck.classList.add('hidden');
    joke.classList.remove('hidden');
    joke.textContent = jokeJson.joke ? jokeJson.joke : `${jokeJson.setup} ${jokeJson.delivery}`;

});

// Filter profanities
const profanities = ["test", "bad", "awful", "scary"];

function profanityFilter(problem) {
    let result = true;
    profanities.forEach(x => {
        if (problem.toLowerCase().includes(x)) {
            result = false;
            alert("WHAT DID YOU JUST TRY TO SAY?!?!?")
            return;
        }
    })
    return result;
}

window.onload = function () {
    document.getElementById("joke").classList.add('hidden');
    let name = loadFromLocalStorage();
    if (name === undefined) { name = prompt("TELL ME YOU NAME NOW!!") };
    document.getElementById("greeting").textContent = `Welcome to Mr. Duck advisory service ${name}`;
}

//localStorage.clear();