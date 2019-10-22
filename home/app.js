import resourcesArray from '../data/api.js';
// import { saveResults } from '../results/results.js';

const harrayForResults = [];
const nodeListOfButtons = document.querySelectorAll('input');

console.log(document);
nodeListOfButtons.forEach((buttonValue) => {
    buttonValue.addEventListener('click', (event) => {
        const query = event.target.value;
        for (let i = 0; i < resourcesArray.length; i++) {
            const filterResults = resourcesArray[i].type.includes(query); 
            if (filterResults) {
                harrayForResults.push(resourcesArray[i]);
            }
            return harrayForResults;
        }
    });
});
export default harrayForResults;