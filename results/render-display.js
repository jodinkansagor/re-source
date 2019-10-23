export default function renderDisplayPage(resource) {
  

    const resourceListItem = document.createElement('li');
    resourceListItem.className = resource.id;

    const a = document.createElement('a');               
    // a.textContent = resource.name;  
    // a.href = resource.website;           
    resourceListItem.appendChild(a);

    const headingDiv = document.createElement('div');
    headingDiv.classList = 'heading-div';
    resourceListItem.appendChild(headingDiv);

    const resourceName = document.createElement('h2');
    resourceName.textContent = resource.name;
    resourceName.href = resource.website; 
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
    resourceWebsite.textContent = 'Website: ' + resource.website;
    a.href = resource.website;
    contactDiv.appendChild(resourceWebsite);

    const resourcePhone = document.createElement('p');
    resourcePhone.classList = 'phone';
    resourcePhone.textContent = 'Phone: ' + resource.phone;
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

    return resourceListItem;
}