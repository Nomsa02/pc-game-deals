
import assert from "node:assert/strict";
import { games } from "./games.js";

import {
  getGamesOnSale,
  getDiscountPercentage,
  getCheapestGame,
  searchGamesByTitle
} from "./logic.js";

// Test 1: Games on sale
assert.equal(getGamesOnSale(games).length, 6);

// Test 2: Empty game list
assert.deepEqual(getGamesOnSale([]), []);

// Test 3: Discount calculation
assert.equal(getDiscountPercentage(games[0]), 50.03);

// Test 4: No discount
assert.equal(getDiscountPercentage(games[1]), 0);

// Test 5: Cheapest game
assert.equal(getCheapestGame(games).title, "Portal 2");

// Test 6: Empty list for cheapest game
assert.equal(getCheapestGame([]), null);

// Test 7: Case-insensitive search
assert.equal(
  searchGamesByTitle(games, "hOlLoW")[0].title,
  "Hollow Knight"
);

// Test 8: Empty search returns all games
assert.equal(searchGamesByTitle(games, "").length, 8);

console.log("All 8 tests passed!");
