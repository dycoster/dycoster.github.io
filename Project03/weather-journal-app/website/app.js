/* Global Variables */
const baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'f2e89ddc1b6bbdf69468c5b14dccd167';

// add eventlistener with callback action
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
e.preventDefault();
const zip = document.getElementById('zip').value;
const content = document.getElementById('feelings').value;
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



// Fetch openweatherMap API
const getData = async (baseURL, zip, apiKey) => {
      const response = await fetch(baseURL + zip + apiKey);
    }
