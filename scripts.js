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
      reason: "A 136-move win for Carlsen that lasted 7 hours 45 minutes.",
      previewImage: "assets/games/carlsen.gif",
      playingAs: "White"
    }
  },
  {
    name: "Bobby Fischer",
    country: "United States",
    peakElo: 2785,
    famousFor: "Aggression",
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
  {
    name: "Anatoly Karpov",
    country: "Russia",
    peakElo: 2780,
    famousFor: "Attacking",
    image: "assets/players/karpov.jpg",
    memorableGame: {
      title: "Karpov vs. Sax",
      year: 1983,
      event: "Linares",
      reason: "Karpov sacrifices for an attack that wins the game 20 moves later.",
      previewImage: "assets/games/karpov.gif",
      playingAs: "White"
    }
  },
  {
    name: "Viswanathan Anand",
    country: "India",
    peakElo: 2817,
    famousFor: "Tactics",
    image: "assets/players/anand.jpg",
    memorableGame: {
      title: "Aronian vs. Anand",
      year: 2013,
      event: "Wijk aan Zee",
      reason: "Anand plays an attacking masterpiece, sacrificing multiple pieces in a relentless attack against the white king in what is widely considered to be his immortal game.",
      previewImage: "assets/games/anand.gif",
      playingAs: "Black"
    }
  },
  {
    name: "Mikhail Tal",
    country: "Latvia",
    peakElo: 2705,
    famousFor: "Sacrifices",
    image: "assets/players/tal.jpg",
    memorableGame: {
      title: "Tal vs. Petrosian",
      year: 1974,
      event: "Soviet Team Cup",
      reason: "Tal destroys perhaps the greatest defensive player of all time in 23 moves.",
      previewImage: "assets/games/tal.gif",
      playingAs: "White"
    }
  },
  {
    name: "José Raúl Capablanca",
    country: "Cuba",
    peakElo: 2725,
    famousFor: "Endgames",
    image: "assets/players/capablanca.jpg",
    memorableGame: {
      title: "Kan vs. Capablanca",
      year: 1936,
      event: "Vienna Game",
      reason: "This game contains one of Capablanca's most famous endgames.",
      previewImage: "assets/games/capablanca.gif",
      playingAs: "Black"
    }
  },
  {
    name: "Hikaru Nakamura",
    country: "United States",
    peakElo: 2816,
    famousFor: "Blitz",
    image: "assets/players/nakamura.jpg",
    memorableGame: {
      title: "Nakamura vs. Carlsen",
      year: 2025,
      event: "Norway Chess",
      reason: "Hikaru beats his long standing rival Magnus Carlsen in a super tactical game.",
      previewImage: "assets/games/nakamura.gif",
      playingAs: "White"
    }
  },
  {
    name: "Fabiano Caruana",
    country: "United States",
    peakElo: 2844,
    famousFor: "Preparation",
    image: "assets/players/caruana.jpg",
    memorableGame: {
      title: "Fabiano vs. Carlsen",
      year: 2014,
      event: "Sinquefield Cup",
      reason: "This game is notable for its high stakes and Caruana's brilliant play.",
      previewImage: "assets/games/caruana.gif",
      playingAs: "White"
    }
  },
  {
    name: "Judit Polgár",
    country: "Hungary",
    peakElo: 2735,
    famousFor: "Aggression",
    image: "assets/players/polgar.jpg",
    memorableGame: {
      title: "Polgár vs. Kasparov",
      year: 2002,
      event: "Russia vs Rest of the World",
      reason: "Judit Polgár rated 2681 beats Garry Kasparov who was rated 2838. The match was pegged 'Match of the New Century'.",
      previewImage: "assets/games/polgar.gif",
      playingAs: "White"
    }
  },
  {
    name: "Mikhail Botvinnik",
    country: "Russia",
    peakElo: 2720,
    famousFor: "Strategy",
    image: "assets/players/botvinnik.jpg",
    memorableGame: {
      title: "Botvinnik vs. Capablanca",
      year: 1938,
      event: "AVRO Tournament",
      reason: "Widely considered one of the greatest games ever played. Botvinnik defeats the legendary Capablanca with a stunning knight sacrifice that decides the game.",
      previewImage: "assets/games/botvinnik.gif",
      playingAs: "White"
    }
  },
  {
    name: "Paul Morphy",
    country: "United States",
    peakElo: 2690,
    famousFor: "Open play",
    image: "assets/players/morphy.jpg",
    memorableGame: {
      title: "Morphy vs. Duke of Brunswick",
      year: 1858,
      event: "Paris Opera House",
      reason: "Known as 'The Opera Game'; Morphy demolishes two noblemen in a box at the Paris Opera, sacrificing his queen to deliver a stunning checkmate. Possibly the most famous game in chess history.",
      previewImage: "assets/games/morphy.gif",
      playingAs: "White"
    }
  },
]


// This function populates the filters
function populateFilters() {
  const countrySelector = document.querySelector("#country-selector");
  const countrySelectorOption = countrySelector.querySelector("option");
  const playStyleSelector = document.querySelector("#style-selector");
  const playStyleSelectorOption = countrySelector.querySelector("option");

  const countries = new Set();
  const playStyles = new Set();

  for (const player of players)
  {
    countries.add(player["country"]);
    playStyles.add(player["famousFor"]);
  }

  const eloMaxSlider = document.querySelector("#max-elo");
    
  for (const country of countries)
  {
    const nextOption = countrySelectorOption.cloneNode(true);
    nextOption.value = country;
    nextOption.textContent = country;
    countrySelector.appendChild(nextOption);
  }

  for (const style of playStyles)
  {
    const nextOption = playStyleSelectorOption.cloneNode(true);
    nextOption.value = style;
    nextOption.textContent = style;
    playStyleSelector.appendChild(nextOption);
  }

  const maxElo = players.reduce(
    (curMax, next) => curMax["peakElo"] > next["peakElo"] ? curMax : next 
  )["peakElo"]

  const minElo = players.reduce(
    (curMax, next) => curMax["peakElo"] < next["peakElo"] ? curMax : next 
  )["peakElo"] 

  eloMaxSlider.max = maxElo;
  eloMaxSlider.min = minElo-1;
  eloMaxSlider.value = maxElo;
  updateEloReadout();
}

// See if the given player passes the current filter
function filterPass(player)
{
  const searchField = document.querySelector("#search");
  const countrySelector = document.querySelector("#country-selector");
  const eloMaxSlider = document.querySelector("#max-elo");
  const playStyleSelector = document.querySelector("#style-selector");


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


  if(playStyleSelector.value != "All" && playStyleSelector.value != player["famousFor"])
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
