
import { games } from "./games.js";

import {
  getDiscountPercentage,
  getGamesOnSale,
  searchGamesByTitle
} from "./logic.js";

const gamesContainer = document.getElementById("games-container");
const searchInput = document.getElementById("search-input");
const saleFilter = document.getElementById("sale-filter");

// Create and display the game cards
function displayGames(gamesList) {
  gamesContainer.innerHTML = "";

  gamesList.forEach(game => {
    const isOnSale = game.salePrice < game.normalPrice;
    const discount = getDiscountPercentage(game);

    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <div class="game-info">
        <h3>${game.title}</h3>
        <p class="store">${game.store}</p>
      </div>

      ${isOnSale
        ? `<span class="sale-tag">ON SALE</span>`
        : ""
      }

      <div class="price-section">
        ${isOnSale
          ? `<span class="normal-price">R${game.normalPrice.toFixed(2)}</span>`
          : ""
        }

        <span class="sale-price">
          R${game.salePrice.toFixed(2)}
        </span>

        ${isOnSale
          ? `<span class="discount">${discount}% OFF</span>`
          : ""
        }
      </div>
    `;

    gamesContainer.appendChild(card);
  });
}

// Filter games based on user input
function updateGames() {
  const searchTerm = searchInput.value;

  let filteredGames = searchGamesByTitle(games, searchTerm);

  if (saleFilter.checked) {
    filteredGames = getGamesOnSale(filteredGames);
  }

  displayGames(filteredGames);
}

// Listen for changes
searchInput.addEventListener("input", updateGames);
saleFilter.addEventListener("change", updateGames);

// Display all games when the page first loads
updateGames();
