import resourcesArray from '../data/api.js';
import findById from '../common/utils.js';

const favoritesArray = [];

export function addUserFavorites(resouceId){
    const favorited = findById(resourcesArray, resouceId);

    favoritesArray.push(favorited);
    
    //stretch goal? Disable check-box if user has already favorited it.

    const json = JSON.stringify(favoritesArray);
    localStorage.setItem('favoritesArray', json);
}

//when calling function buttonOnClick(button.value)
