// import { favoritesArray } from '../results/makeFavesArray.js';

export function renderFavorites(someFavoritesArray) {
    for (let i = 0; i < someFavoritesArray.length; i++) {
        const favorite = someFavoritesArray[i];

        const favoritesListItem = document.createElement('li');
        favoritesListItem.className = favorite.id;

        const favoriteName = document.createElement('p');
        favoriteName.className = favorite.name;
        favoritesListItem.appendChild(favoriteName);

        const favoritePhone = document.createElement('p');
        favoriteName.className = favorite.phone;
        favoritesListItem.appendChild(favoritePhone);

        const favoriteAddress = document.createElement('p');
        favoriteName.className = favorite.address;
        favoritesListItem.appendChild(favoriteAddress);
    }
}