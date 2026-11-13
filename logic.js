// Filter games on sale
export function getGamesOnSale(games) {
  return games.filter(game => game.salePrice < game.normalPrice);
}

// Compute Discount Percentage
export function getDiscountPercentage(game) {
  if (game.normalPrice <= 0) {
    return 0;
  }

  const discount =
    ((game.normalPrice - game.salePrice) / game.normalPrice) * 100;

  return Math.max(0, Number(discount.toFixed(2)));
}

// Find cheapest game
export function getCheapestGame(games) {
  if (games.length === 0) {
    return null;
  }

  return games.reduce((cheapest, game) => {
    return game.salePrice < cheapest.salePrice
      ? game
      : cheapest;
  });
}

// Search games by title
export function searchGamesByTitle(games, searchTerm) {
  const query = searchTerm.trim().toLowerCase();

  return games.filter(game =>
    game.title.toLowerCase().includes(query)
  );
}

