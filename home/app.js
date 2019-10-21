// const food = document.getElementById('food');
// const shelter = document.getElementById('shelter');
// const medical = document.getElementById('medical');
// const clothing = document.getElementById('clothing');
const harrayForResults = [];
const nodeListOfButtons = document.querySelectorAll('input');

const resourceProvider1 = {
    id:'provider1',
    name:'Provider One',
    type:['meal', 'medical', 'clothing']
};
const resourceProvider2 = {
    id:'provider2',
    name:'Provider Two',
    type:['clothing']
};
const resourceProvider3 = {
    id:'provider3',
    name:'Provider Three',
    type:['shelter', 'medical']
};
const fakeArray = [resourceProvider1, resourceProvider2, resourceProvider3];
nodeListOfButtons.forEach((buttonValue) => {
    buttonValue.addEventListener('click', (event) => {
        const query = event.target.value;
        for (let i = 0; i < fakeArray.length; i++) {
            const filterResults = fakeArray[i].type.includes(query); 
            if (filterResults) {
                harrayForResults.push(fakeArray[i]);
            }
        }
        console.log(harrayForResults);
    });
    
});
