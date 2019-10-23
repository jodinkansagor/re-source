import { renderDisplayPage } from '../common/utils.js';

import resourceArray from '../data/api.js';
const list = document.getElementById('resource-list');
const neighborhoodSubmitButton = document.getElementById('neighborhood-button');
const neighborhoodForm = document.getElementById('neighborhood-form');


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

for (let i = 0; i < displayResults.length; i++) {
    const resource = displayResults[i];
    const listItem = renderDisplayPage(resource);
    list.appendChild(listItem);
}

// const checkedBoxes = document.querySelectorAll('input[name=neighborhood]');
// checkedBoxes.forEach(checkedBox => {
//     checkedBox.addEventListener('change', () => {
//         if (checkedBox.checked) {
//             resourceArray.forEach(resource => {
//                 if (checkedBox.value === resource.neighborhood) {
//                     listItem.classList.add('hidden');
//                 });
//             })
//     }
// });
// });

const checkedBoxes = document.querySelectorAll('input[name=neighborhood]');
checkedBoxes.forEach(checkedBox => {
    checkedBox.addEventListener('change', () => {
        if (checkedBox.checked) {
            resourceArray.forEach(resource => {
                if (checkedBox.value === resource.neighborhood) {
                    listItem.classList.add('hidden');
                }
            });
        }
    });
});

const submitButton = document.getElementById('submit-favorites-button');

submitButton.addEventListener('click', () => {
    const nodeListOfCheckBoxes = document.querySelectorAll('#resource-list input:checked');
    for (let i = 0; i < nodeListOfCheckBoxes.length; i++)
    { addUserFavorites(nodeListOfCheckBoxes[i].value);
    }
});
