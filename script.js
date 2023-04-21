// Get the input elements
const girlNameInput = document.getElementById("girl-name");
const boyNameInput = document.getElementById("boy-name");

// Get the result element
const resultEl = document.getElementById("result");

// Get the button element
const calculateBtn = document.getElementById("calculate-btn");

// Add click event listener to the button
calculateBtn.addEventListener("click", calculateLove);

function calculateLove() {
    const name1 = girlNameInput.value.toLowerCase();
    const name2 = boyNameInput.value.toLowerCase();
    let lovePercentage = 0;

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
    } else {
        // Calculate the love percentage
        lovePercentage = Math.floor(Math.random() * 100) + 1;

        // Special cases
        if (name1 === "mpok jowo" && name2 === "ronaldo ruzali") {
            lovePercentage = 100;
        }
        if (name1 === "angel" && name2 === "brandon") {
            lovePercentage = 100;
        }

        // Display the result
        if (lovePercentage === 0) {
            resultEl.innerHTML = `Sorry, ${name1} and ${name2} are not compatible.`;
        } else {
            resultEl.innerHTML = `${name1} and ${name2} are ${lovePercentage}% compatible!`;
        }
    }
}
