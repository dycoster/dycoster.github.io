/* Global Variables */
const baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'f2e89ddc1b6bbdf69468c5b14dccd167';

// add eventlistener with callback action
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
const newZip = document.getElementById('zip').value;
getWeather(baseURL, newZip, apiKey)

}

// Fetch openweatherMap API
const getWeather = async (baseURL, newZip, apiKey) => {
    const res = await fetch(baseURL + newZip + apiKey);
    try {

        const data = await res.json();
        console.log(data)
        return data;
    } catch(error) {
        console.log("error", error);
    }
  }

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



