const a = document.createElement('a');               
a.textContent = resource.name;  
a.href = resource.website;           
resourceListItem.appendChild(a);
console.log(resource.website);