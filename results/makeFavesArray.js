import { ResourceArray } from '../data/resource-array-class.js';
import { resourceData } from '../data/resource-data.js';
import findById from '../common/utils.js';

export const favoritesArray = [];


export function addUserFavorites(resouceId){
    let found = findById(favoritesArray, resouceId);
    if (!found) {
        found = {
            id: resourceId,
            name: resourceName,
            phone: resourcePhone,
            website: resourceWebsite,
        };
      
    } else {
        return;
    }
    const json = JSON.stringify(favoritesArray);
    localStorage.setItem('favoritesArray', json);
}
