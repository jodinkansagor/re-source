export function renderDisplayPage(resource) {

    const resourceListItem = document.createElement('li');
    resourceListItem.className = resource.id;

    const headingDiv = document.createElement('div');
    headingDiv.classList = 'heading-div';
    resourceListItem.appendChild(headingDiv);

    const resourceName = document.createElement('h2');
    resourceName.textContent = resource.name;
    headingDiv.appendChild(resourceName);

    const resourceCheckBox = document.createElement('input');
    resourceCheckBox.type = 'checkbox';
    resourceCheckBox.classList = 'checkbox';
    resourceCheckBox.value = resource.id;
    headingDiv.appendChild(resourceCheckBox);

    const contactDiv = document.createElement('div');
    contactDiv.classList = 'contact-div';
    resourceListItem.appendChild(contactDiv);

    const resourceWebsite = document.createElement('p');
    resourceWebsite.classList = 'website';
    resourceWebsite.textContent = resource.website;
    contactDiv.appendChild(resourceWebsite);

    const resourcePhone = document.createElement('p');
    resourcePhone.classList = 'phone';
    resourcePhone.textContent = resource.phone;
    contactDiv.appendChild(resourcePhone);

    const resourceDescription = document.createElement('p');
    resourceDescription.classList = 'description';
    resourceDescription.textContent = resource.description;
    resourceListItem.appendChild(resourceDescription);
    
    const resourceHours = document.createElement('p');
    resourceHours.classList = 'hours';
    resourceHours.textContent = resource.hours;
    resourceListItem.appendChild(resourceHours);

    const directionsDiv = document.createElement('div');
    directionsDiv.classList = 'directions-div';
    resourceListItem.appendChild(directionsDiv);

    const resourceTransit = document.createElement('p');
    resourceTransit.classList = 'transit';
    resourceTransit.textContent = resource.transit;
    directionsDiv.appendChild(resourceTransit);

    const resourceAddress = document.createElement('p');
    resourceAddress.classList = 'address';
    resourceAddress.textContent = resource.address;
    directionsDiv.appendChild(resourceAddress);


    // const resourceDescription = document.createElement('p');
    // resourceDescription.classList = 'description';
    // resourceDescription.textContent = resource.description;
    // resourceListItem.appendChild(resourceDescription);


    // const resourceNeighborhood = document.createElement('p');
    // resourceNeighborhood.classList = 'neighborhood';
    // resourceNeighborhood.textContent = resource.neighborhood;
    // resourceListItem.appendChild(resourceNeighborhood);

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
