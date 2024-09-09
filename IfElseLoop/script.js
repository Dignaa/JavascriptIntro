// Get the container element

const numberList = document.getElementById("number-list");

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    // Create a new div element for each number
    const divElement = document.createElement("div");
    divElement.textContent = i;
    divElement.setAttribute('id', i);
    numberList.appendChild(divElement);

    divElement.classList.add("number")


    // Check if the number is even or odd and apply the appropriate class
    if (i % 2 === 0) {
        divElement.classList.add("even")
    }
    else {
        divElement.classList.add("odd");
    }
}

// Add an event listener to highlight the number when clicked
numberList.addEventListener("click", function (event) {

    // Remove highlight from all numbers
    const highlighted = document.querySelectorAll("div.highlight");


    highlighted.forEach((x) => {
        x.classList.remove("highlight");
    })

    // Add highlight to the clicked number
    document.getElementById(event.target.id).classList.add("highlight");
    numberList.classList.remove("highlight");

});


// Append the new div to the container


