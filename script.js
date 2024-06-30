function roll(){
    // Get the number of dice to roll from the input field and convert it to a number
    const numberOfDice = Number(document.getElementById("numberOfDice").value);

    // Get the element to display the dice results
    const diceResult = document.getElementById("diceResult");

    // Get the element to display the dice images
    const diceImages = document.getElementById("diceImages");

    // Initialize arrays to hold the dice values and images
    const values = [];
    const images = [];

    // Loop through the number of dice to roll
    for(let i = 0; i < numberOfDice; i++){

        // Generate a random number between 1 and 6 for each dice roll
        const randomDiceNum = Math.floor((Math.random() * (6 - 1)) + 1);

        // Add the random number to the values array
        values.push(randomDiceNum);

        // Add the corresponding dice image HTML to the images array
        images.push(`<img src="images/dice ${randomDiceNum}.jpg">`);
    }

    // Update the dice result text content with the rolled values
    diceResult.textContent = `dice: ${values.join(", ")}`;

    // Update the dice images HTML with the generated image tags
    diceImages.innerHTML = images.join("");
}
