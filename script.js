

function roll(){

    const numberOfDice = Number(document.getElementById("numberOfDice").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];



    for(let i = 0; i< numberOfDice ; i++){
        const randomDiceNum = Math.floor((Math.random() * (6 - 1)) + 1);
        values.push(randomDiceNum);
        images.push(`<img src ="images/dice ${randomDiceNum}.jpg">`);


    }
    diceResult.textContent = `dice : ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}
