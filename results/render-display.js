function renderDisplayPage(resource) {
  
    const resourceListItem = document.createElement('li');
    resourceListItem.className = resource.id;

    const headingDiv = document.createElement('div');
    headingDiv.classList = 'heading-div';
    resourceListItem.appendChild(headingDiv);
    
    if (resource.website === 'false') {
        const resourceName = document.createElement('h2');
        resourceName.textContent = resource.name;
        headingDiv.appendChild(resourceName);
        console.log('false', resourceName);
    } else {
        const a = document.createElement('a');               
        a.textContent = resource.name;  
        a.href = resource.website;           
        headingDiv.appendChild(a);
        console.log(resource.website);
    }

    const resourceCheckBox = document.createElement('input');
    resourceCheckBox.type = 'checkbox';
    resourceCheckBox.classList = 'checkbox';
    resourceCheckBox.value = resource.id;
    
    let favoritesArray = JSON.parse(localStorage.getItem('favoritesArray') || '[]');
    
    for (let i = 0; i < favoritesArray.length; i++) {
        const favorite = favoritesArray[i];
        
        if (favorite.id === resourceCheckBox.value) {
            resourceCheckBox.checked = true; 
        } else {
            resourceCheckBox.checked = false;
        }
    }

    headingDiv.appendChild(resourceCheckBox);

    const contactDiv = document.createElement('div');
    contactDiv.classList = 'contact-div';
    resourceListItem.appendChild(contactDiv);

    const resourcePhone = document.createElement('p');
    resourcePhone.classList = 'phone';
    resourcePhone.textContent = 'Phone: ' + resource.phone;
    contactDiv.appendChild(resourcePhone);

    const resourceDescription = document.createElement('p');
    resourceDescription.classList = 'description';
    resourceDescription.textContent = 'Description: ' + resource.description;
    resourceListItem.appendChild(resourceDescription);
    
    const resourceHours = document.createElement('p');
    resourceHours.classList = 'hours';
    resourceHours.textContent = 'Hours: ' + resource.hours;
    resourceListItem.appendChild(resourceHours);

    const directionsDiv = document.createElement('div');
    directionsDiv.classList = 'directions-div';
    resourceListItem.appendChild(directionsDiv);

    const resourceTransit = document.createElement('p');
    resourceTransit.classList = 'transit';
    resourceTransit.textContent = 'Transit: ' + resource.transit;
    directionsDiv.appendChild(resourceTransit);

    const resourceAddress = document.createElement('p');
    resourceAddress.classList = 'address';
    resourceAddress.textContent = resource.address;
    directionsDiv.appendChild(resourceAddress);

    if (resource.onlyMen === true) {
        const imgMen = document.createElement('img');               
        imgMen.src = '../assets/menIcon.png';             
        resourceListItem.appendChild(imgMen);
        console.log('img', imgMen);
    } if (resource.onlyWomen === true) {
        const imgWomen = document.createElement('img');               
        imgWomen.src = '../assets/womenIcon.png';             
        resourceListItem.appendChild(imgWomen);
        console.log('img', imgWomen);
    } if (resource.lgbt === true) {
        const imgLgbt = document.createElement('img');               
        imgLgbt.src = '../assets/rainbow.png';             
        resourceListItem.appendChild(imgLgbt);
        console.log('img', imgLgbt);
    } if (resource.religious === true) {
        const imgReligious = document.createElement('img');               
        imgReligious.src = '../assets/religionIcon.png';             
        resourceListItem.appendChild(imgReligious);
        console.log('img', imgReligious);
    }

    return resourceListItem;
}

export default renderDisplayPage;