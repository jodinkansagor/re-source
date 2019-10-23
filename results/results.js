import renderDisplayPage from '../results/render-display.js';
import { addUserFavorites } from '../results/makeFavesArray.js';
const list = document.getElementById('resource-list');


function getResults() {
    const json = localStorage.getItem('resourceArray');
    if (!json) {
        return null;
    } else {
        const resource = JSON.parse(json);
        return resource;
    }
}

export const displayResults = getResults();

function resultsDisplayer(resultsArray) {
    list.innerHTML = '';
    for (let i = 0; i < resultsArray.length; i++) {
        const resource = resultsArray[i];
        const listItem = renderDisplayPage(resource);
        list.appendChild(listItem);
    }
}


resultsDisplayer(displayResults);

const checkBoxes = document.querySelectorAll('input[name=neighborhood]');

checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('change', () => {
        const checkedBoxes = document.querySelectorAll('input[name=neighborhood]:checked');
        const neighborhoods = [];
        checkedBoxes.forEach(checkedBox => {
            neighborhoods.push(checkedBox.value);
        });
        const results = displayResults.filter((result) => neighborhoods.includes(result.neighborhood));
        resultsDisplayer(results);
    });
});

const submitButton = document.getElementById('submit-favorites-button');

submitButton.addEventListener('click', () => {
    const nodeListOfCheckBoxes = document.querySelectorAll('#resource-list input:checked');
    for (let i = 0; i < nodeListOfCheckBoxes.length; i++)
    { addUserFavorites(nodeListOfCheckBoxes[i].value);
    }
});
