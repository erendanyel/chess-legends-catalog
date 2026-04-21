/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// All images gotten from wiki-commons
// All gifs from games created using: https://www.chess.com/gifs
const players = [
  {
    name: "Garry Kasparov",
    country: "Russia",
    peakElo: 2851,
    era: "Modern",
    famousFor: "Attacking",
    image: "assets/players/kasparov.jpg",
    memorableGame: {
      title: "Kasparov vs. Topalov",
      year: 1999,
      event: "Wijk aan Zee",
      reason: "One of the most famous attacking games in chess history.",
      previewImage: "assets/games/kasparov.gif",
      playingAs: "White"
    }
  },
  {
    name: "Magnus Carlsen",
    country: "Norway",
    peakElo: 2882,
    era: "Modern",
    famousFor: "Endgames",
    image: "assets/players/carlsen.jpg",
    memorableGame: {
      title: "Carlsen vs. Nepomniachtchi",
      year: 2021,
      event: "World Championship",
      reason: "A 136-move win for Carlsen that lasted 7 hours 45 minutes. As of 2026, it is the longest game in the history of the World Chess Championship.",
      previewImage: "assets/games/carlsen.gif",
      playingAs: "White"
    }
  },
  {
    name: "Bobby Fischer",
    country: "United States",
    peakElo: 2785,
    era: "Modern",
    famousFor: "Aggresiveness",
    image: "assets/players/fischer.jpg",
    memorableGame: {
      title: "Donald Byrne vs. Fischer",
      year: 1956,
      event: "New York",
      reason: "Fischer played this game at 13years old. Dubbed 'The Game of the Century'",
      previewImage: "assets/games/fischer.gif",
      playingAs: "Black"
    }
  },
]

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < players.length; i++) {
    let title = players[i]["name"];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, players[i]); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, player) {
  const frontFace = card.querySelector(".card-front");
  const backFace = card.querySelector(".card-back");

  card.style.display = "";
  frontFace.style.display = "flex";

  const cardHeader = frontFace.querySelector("h2");
  cardHeader.textContent = player["name"];
  frontFace.style.backgroundImage = "url("+  player["image"] + ")";

  const gameGIF = backFace.querySelector("img");
  gameGIF.src = player["memorableGame"]["previewImage"];
  console.log(player["memorableGame"]);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  players.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
