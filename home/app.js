import resourcesArray from '../data/api.js';
import { saveResults } from '../common/utils.js';

let harrayForResults = [];
const nodeListOfButtons = document.querySelectorAll('input');

nodeListOfButtons.forEach((buttonValue) => {
    buttonValue.addEventListener('click', (event) => {
        harrayForResults = [];
        const query = event.target.value;
        for (let i = 0; i < resourcesArray.length; i++) {
            const filterResults = resourcesArray[i].type.includes(query); 
            if (filterResults) {
                harrayForResults.push(resourcesArray[i]);
            }
        } 
        saveResults(harrayForResults);
        window.location = 'results';
    });
});