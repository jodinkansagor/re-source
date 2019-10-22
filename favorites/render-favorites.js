export function renderFavorites(favorite) {

    const favoritesListItem = document.createElement('li');
    favoritesListItem.classList = favorite.id;

    const favoriteName = document.createElement('p');
    favoriteName.textContent = favorite.name;
    favoriteName.classList = 'name';
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