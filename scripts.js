// All images gotten from wiki-commons
// All gifs from games created using: https://www.chess.com/gifs
const players = [
  {
    name: "Garry Kasparov",
    country: "Russia",
    peakElo: 2851,
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


// This function populates the filters
function populateFilters() {
  const countrySelector = document.querySelector("#country-selector");
  const countrySelectorOption = countrySelector.querySelector("option");

  const countries = new Set();

  for (const player of players)
  {
    countries.add(player["country"]);
  }

  const eloMaxSlider = document.querySelector("#max-elo");
    
  for (const country of countries)
  {
    const nextOption = countrySelectorOption.cloneNode(true);
    nextOption.value = country;
    nextOption.textContent = country;
    countrySelector.appendChild(nextOption);
  }

  const maxElo = players.reduce(
    (curMax, next) => curMax["peakElo"] > next["peakElo"] ? curMax : next 
  )["peakElo"]

  const minElo = players.reduce(
    (curMax, next) => curMax["peakElo"] < next["peakElo"] ? curMax : next 
  )["peakElo"] 

  eloMaxSlider.max = maxElo;
  eloMaxSlider.min = minElo;
  eloMaxSlider.value = maxElo;
  updateEloReadout();
}

// See if the given player passes the current filter
function filterPass(player)
{
  const searchField = document.querySelector("#search");
  const countrySelector = document.querySelector("#country-selector");
  const eloMaxSlider = document.querySelector("#max-elo");


  if (countrySelector.value != "All" && countrySelector.value != player["country"])
  {
    return false;
  }

  if (player["peakElo"] > eloMaxSlider.value)
  {
    return false;
  }

  if(!player["name"].toLowerCase().includes(searchField.value.toLowerCase().trim()))
  {
    return false;
  }


  return true;
}


// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");  


  const sortByName = document.querySelector("#name-filter");
  const sortedPlayers = [...players];
  if (sortByName.value == "AZ")
  {
    sortedPlayers.sort((a,b) => a["name"] < b["name"] ? -1 : 1);
  }
  if (sortByName.value == "ZA")
  {
    sortedPlayers.sort((a,b) => a["name"] > b["name"] ? -1 : 1);
  }
  


  for (let i = 0; i < sortedPlayers.length; i++) {
    const player = sortedPlayers[i];
    if (filterPass(player))
    {
      const nextCard = templateCard.cloneNode(true); // Copy the template card
      editCardContent(nextCard, player); // Edit the card content
      cardContainer.appendChild(nextCard)  // Add new card to the container
    }
  }
}

// This function edits the template card's content
function editCardContent(card, player) {
  const frontFace = card.querySelector(".card-front");
  const backFace = card.querySelector(".card-back");
  
  const memorableGame = player["memorableGame"];

  // Front of the card
  card.style.display = "";
  const cardHeader = frontFace.querySelector(".player-name");
  cardHeader.textContent = player["name"];
  frontFace.style.backgroundImage = "url("+  player["image"] + ")";

  const cardCountry = frontFace.querySelector(".player-country");
  cardCountry.textContent = player["country"];

  const cardPeakELO = frontFace.querySelector(".player-elo");
  cardPeakELO.textContent = "Elo " + player["peakElo"];

  const cardPlayFact = frontFace.querySelector(".player-fact");
  cardPlayFact.textContent = player["famousFor"];

  // Back of the card
  const gameTitle = backFace.querySelector(".game-title");
  gameTitle.textContent = memorableGame["title"];

  const gameDetails = backFace.querySelector(".game-details");
  gameDetails.textContent = "Game took place in " + memorableGame["year"] + " at " + memorableGame["event"] + ". ";
  gameDetails.textContent += memorableGame["reason"];

  const playingAs = backFace.querySelector(".game-playing-as");
  playingAs.textContent = player["name"] + " playing as the " + memorableGame["playingAs"].toLowerCase() + " pieces.";


  const gameGIF = backFace.querySelector("img");
  gameGIF.src = player["memorableGame"]["previewImage"];
}

document.addEventListener("DOMContentLoaded", populateFilters);
// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function flipCards() {
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("flipped");
  }
  );
}

function updateEloReadout()
{
  const slider = document.querySelector("#max-elo");
  document.querySelector("#elo-display").textContent = slider.value;
}

function removeLastCard() {
  players.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
