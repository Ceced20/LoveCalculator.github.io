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

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
    } else {
        // Convert names to arrays of letters
        const letters1 = name1.split("");
        const letters2 = name2.split("");

        let count = 0;

        // loop through each letter in name1
        for (let i = 0; i < letters1.length; i++) {
            // loop through each letter in name2
            for (let j = 0; j < letters2.length; j++) {
                // if letters match, increment count and remove from letters2 to avoid duplicates
                if (letters1[i] === letters2[j]) {
                    count++;
                    letters2.splice(j, 1);
                    break;
                }
            }
        }

        // Calculate the love percentage
        const lovePercentage = Math.floor((count / name1.length) * 100);

        // Special cases
        if (name1 === "Jesslyn" && name2 === "Matthew") {
            resultEl.innerHTML = "100% Compatible!";
        } else if (name1 === "jesslyn" && name2 === "matthew") {
            resultEl.innerHTML = "100% Compatible!";

        } else {
            // Display the result
            if (lovePercentage === 0) {
                resultEl.innerHTML = `Sorry, ${name1} and ${name2} are not compatible, ${name1} and ${name2} are ${lovePercentage}%`;
            } else {
                resultEl.innerHTML = `${name1} and ${name2} are ${lovePercentage}% compatible!`;
            }
        }
    }
}
