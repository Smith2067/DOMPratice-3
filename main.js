const parentDiv = document.getElementById("parentElement");
const newHeading = document.createElement('h1');
let childDiv = document.getElementById("childElement");
newHeading.innerHTML = "(not) My First JavaScript Project"
parentDiv.insertBefore(newHeading, childDiv);