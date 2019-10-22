import resourcesArray from '../data/api.js';
import findById from '../common/utils.js';

let favoritesArray = [];

export function addUserFavorites(resouceId){
    const favorited = findById(resourcesArray, resouceId);

    favoritesArray.push(favorited);

    const json = JSON.stringify(favoritesArray);
    localStorage.setItem('favoritesArray', json);
}


const submitButton = document.getElementById('submit-favorites-button');

submitButton.addEventListener('click', (event) => {
    favoritesArray = [];
    const nodeListOfCheckBoxes = document.querySelectorAll('input');
    const query = event.target.value;
    for (let i = 0; i < nodeListOfCheckBoxes.length; i++)
    {
        if (query === true) {
            favoritesArray.push(query);
        }
    }
});