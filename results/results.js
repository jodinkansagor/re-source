const list = document.getElementById('resource-list');
import { renderDisplayPage } from '../common/utils.js';

function getResults() {
    const json = localStorage.getItem('resourceArray');
    if (!json) {
        return null;
    } else {
        const resource = JSON.parse(json);
        return resource;
    }
}

const newArray = getResults();

console.log(newArray, 'new array');
for (let i = 0; i < newArray.length; i++) {
    const resource = newArray[i];
    const listItem = renderDisplayPage(resource);
    list.appendChild(listItem);
}