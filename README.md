# Color Scheme Generator

This project demonstrates how to generate and display color schemes using the Color API. The application allows users to input a color and select a color mode to fetch and display a color scheme. This project was developed as part of the Scrimba curriculum.

## Overview

The application consists of:
- An input field to enter a seed color.
- A dropdown to select a color mode (e.g., monochrome, analogic).
- A button to fetch and display the color scheme.

### Code Breakdown

1. **API Integration**: 
   - The `getColors` function makes a fetch request to the Color API, using the provided seed color and mode to get a color scheme.
   - Colors are rendered dynamically on the page using the `renderColors` function.

2. **Event Handling**:
   - An event listener on the button fetches the color scheme when clicked.
   - Default colors and modes are set and fetched when the page loads.

## Key Learnings

- **API Integration**: Learned to work with the Color API to fetch color schemes based on user input.
- **Dynamic Rendering**: Utilized JavaScript to dynamically generate and display HTML content based on API response.
- **Event Handling**: Implemented event listeners to trigger API calls and update the UI accordingly.

## View Project
https://anet-eny.github.io/color-scheme-generator/
