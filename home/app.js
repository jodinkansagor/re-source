import resourcesArray from '../data/api.js';
// import { saveResults } from '../results/results.js';

function saveResults(resourceArray) {
    const json = JSON.stringify(resourceArray);
    localStorage.setItem('resourceArray', json);
}

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
        } 
        console.log(harrayForResults);
        saveResults(harrayForResults);
        window.location = 'results';
    });
    
});



// export default harrayForResults;

//note for tomorrow - currently this function will continue to push new objects into the array and it does not take any out. meaning, if you click food and get your resutls and then go back and click medical, you will get both food and medical we can add in a button that initializes the local storage if we want.