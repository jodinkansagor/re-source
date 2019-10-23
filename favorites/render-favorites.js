export function renderFavorites(favorite) {

    const favoritesListItem = document.createElement('li');
    favoritesListItem.classList = favorite.id;
    const headingDiv = document.createElement('div');
    headingDiv.classList = 'heading-div';
    favoritesListItem.appendChild(headingDiv);
    
    if (favorite.website === 'false') {
        const favoriteName = document.createElement('h2');
        favoriteName.textContent = favorite.name;
        headingDiv.appendChild(favoriteName);
        console.log('false', favoriteName);
    } else {
        const a = document.createElement('a');               
        a.textContent = favorite.name;  
        a.href = favorite.website;           
        headingDiv.appendChild(a);
        console.log(favorite.website);
    }


    const favoritePhone = document.createElement('p');
    favoritePhone.textContent = favorite.phone;
    favoritesListItem.appendChild(favoritePhone);

    const favoriteAddress = document.createElement('p');
    favoriteAddress.textContent = favorite.address;
    favoritesListItem.appendChild(favoriteAddress);

    return favoritesListItem;
}