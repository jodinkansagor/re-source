export function renderFavorites(parsedFavoritesArray) {
    for (let i = 0; i < parsedFavoritesArray.length; i++) {
        const favorite = parsedFavoritesArray[i];

        const favoritesListItem = document.createElement('li');
        favoritesListItem.className = favorite.id;

        const favoriteName = document.createElement('p');
        favoriteName.textContent = favorite.name;
        favoritesListItem.appendChild(favoriteName);

        const favoritePhone = document.createElement('p');
        favoritePhone.textContent = favorite.phone;
        favoritesListItem.appendChild(favoritePhone);

        const favoriteAddress = document.createElement('p');
        favoriteAddress.textContent = favorite.address;
        favoritesListItem.appendChild(favoriteAddress);

        const favoriteWebsite = document.createElement('p');
        favoriteWebsite.textContent = favorite.website;
        favoritesListItem.appendChild(favoriteWebsite);

        return favoritesListItem;
    }
}