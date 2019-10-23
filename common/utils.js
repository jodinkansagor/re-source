export function renderDisplayPage(resource) {
  

    const resourceListItem = document.createElement('li');
    resourceListItem.className = resource.id;

    const a = document.createElement('a');               
    a.textContent = resource.name;  
    a.href = resource.website;           
    resourceListItem.appendChild(a);
    console.log(resource.website);

    const resourceName = document.createElement('h2');
    resourceName.textContent = resource.name;
    resourceListItem.appendChild(resourceName);

    const contactDiv = document.createElement('div');
    resourceListItem.appendChild(contactDiv);

    const resourcePhone = document.createElement('p');
    resourcePhone.classList = 'phone';
    resourcePhone.textContent = resource.phone;
    contactDiv.appendChild(resourcePhone);

    const resourceAddress = document.createElement('p');
    resourceAddress.classList = 'address';
    resourceAddress.textContent = resource.address;
    contactDiv.appendChild(resourceAddress);

    const resourceDescription = document.createElement('p');
    resourceDescription.classList = 'description';
    resourceDescription.textContent = resource.description;
    resourceListItem.appendChild(resourceDescription);

    const resourceHours = document.createElement('p');
    resourceHours.classList = 'hours';
    resourceHours.textContent = resource.hours;
    resourceListItem.appendChild(resourceHours);

    const resourceTransit = document.createElement('p');
    resourceTransit.classList = 'transit';
    resourceTransit.textContent = resource.transit;
    resourceListItem.appendChild(resourceTransit);

    const resourceWebsite = document.createElement('p');
    resourceWebsite.classList = 'website';
    resourceWebsite.textContent = resource.website;
    resourceListItem.appendChild(resourceWebsite);

    const resourceNeighborhood = document.createElement('p');
    resourceNeighborhood.classList = 'neighborhood';
    resourceNeighborhood.textContent = resource.neighborhood;
    resourceListItem.appendChild(resourceNeighborhood);

    const resourceCheckBox = document.createElement('input');
    resourceCheckBox.type = 'checkbox';
    resourceCheckBox.classList = 'checkbox';
    resourceCheckBox.value = resource.id;
        
    resourceListItem.appendChild(resourceCheckBox);

    return resourceListItem;
}


function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }

    return null;
}

export default findById;
