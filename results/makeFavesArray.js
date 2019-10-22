import { displayResults } from '../results/results.js';
import findById from '../common/utils.js';



export function addUserFavorites(resouceId){
    let favoritesArray = JSON.parse(localStorage.getItem('favoritesArray') || '[]');

    const favorited = findById(displayResults, resouceId);

    favoritesArray.push(favorited);

    const json = JSON.stringify(favoritesArray);
    localStorage.setItem('favoritesArray', json);
}