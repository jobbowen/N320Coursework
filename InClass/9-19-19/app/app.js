var theplace = document.querySelector("#theplace");
var cardTemplate = document.querySelector("#cardTemplate");

var suits = ["🍷", "🎱", "🌆", "🎁"];
var values = ["A", "1", "2", "3"];

var i = 0;
suits.forEach((suit) => {
    values.forEach((value) => {
        //We know we have a specific combination of suit + value

        //create and customize the element
        let newCard = document.createElement("div");
        newCard.innerHTML = value + " " + suit;
        newCard.classList.add("card");
        newCard.style.animationDelay = i * .1 + "s";


        //set up connections and events
        newCard.addEventListener("mouseover", onCardOver);
        newCard.addEventListener("mouseout", onCardOut);

        //put onto the page
        theplace.appendChild(newCard);

        i++;

    })
});

function onCardOver(event) {
    event.target.classList.add("cardOver");
}

function onCardOut(event) {

}
