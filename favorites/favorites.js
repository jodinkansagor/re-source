import { renderFavorites } from './render-favorites.js';

const grabbed = document.getElementById('favorites-list');

const favoritesArray = [];

const json = JSON.stringify(favoritesArray);
localStorage.setItem('favoritesArray', json);

const parsedFavoritesArray = JSON.parse(localStorage.favoritesArray);

const favoritesList = renderFavorites(parsedFavoritesArray);
grabbed.appendChild(favoritesList);

// console.log(parsedFavoritesArray);


