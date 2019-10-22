import { renderDisplayPage } from '../common/utils.js';
const list = document.getElementById('resource-list');
const neighborhoodForm = document.getElementById('neighborhood-buttons');


function getResults() {
    const json = localStorage.getItem('resourceArray');
    if (!json) {
        return null;
    } else {
        const resource = JSON.parse(json);
        return resource;
    }
}

const displayResults = getResults();

for (let i = 0; i < displayResults.length; i++) {
    const resource = displayResults[i];
    const listItem = renderDisplayPage(resource);
    list.appendChild(listItem);
}

neighborhoodForm.addEventListener('change', function(event) {
    event.preventDefault();
    const formData = new FormData(neighborhoodForm);
    const neighborhoodArray = formData.getAll(event.target.value);
    console.log(neighborhoodArray);
});
