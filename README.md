
# PC Game Deals

A simple web application that displays PC game deals,
calculates discounts, and allows users to search and
filter games.

## Features

- Display eight PC games and their prices
- Identify discounted games
- Calculate discount percentages
- Find the cheapest game
- Case-insensitive title searching
- Live search functionality
- Filter games currently on sale
- Responsive game card layout

## Technologies

- HTML5
- CSS3
- JavaScript (ES Modules)
- Node.js for testing

## Getting Started

1. Clone the repository.
2. Open the project folder.
3. Run a local server:

   python3 -m http.server 5500

4. Visit http://localhost:5500

## Running Tests

Run:

    node test.js

The test suite checks the core JavaScript functions,
including empty arrays and case-insensitive searches.

## Project Structure

- games.js — Game dataset
- logic.js — Game filtering and calculation functions
- app.js — DOM rendering and event handling
- index.html — Page structure
- style.css — Responsive styling
- test.js — JavaScript tests

## Assumptions

- Game prices are provided in South African Rand.
- A game is on sale when its sale price is lower than
  its normal price.
- The supplied dataset is used instead of a live API.
- An empty search displays all available games.

## Future Improvements

- Integrate the CheapShark API
- Add sorting by price and discount percentage
- Improve empty search results messaging
- Add automated browser tests
