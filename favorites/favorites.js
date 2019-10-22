import { renderFavorites } from './render-favorites.js';

const grabbed = document.getElementById('favorites-list');

const favoritesArray = [{
    id: 'bud-clark-clinic',
    name: 'Bud Clark Clinic',
    phone: '(971)271-6360',
    address: '650 NW Irving St.',
    description: 'Walk-in clinic for short-term treatment for injuries, new illnesses and urgent medical needs.',
    hours: '8:00a.m.-3:30p.m. Mon.-Fri., closed 11:30a.m.-1p.m.',
    transit: 'Bus: 17; MAX Yellow, Green',
    website: '',
    neighborhood: 'NW',
    type: ['medical']
}];

const json = JSON.stringify(favoritesArray);
localStorage.setItem('favoritesArray', json);

const parsedFavoritesArray = JSON.parse(localStorage.favoritesArray);

const favoritesList = renderFavorites(parsedFavoritesArray);
grabbed.appendChild(favoritesList);


