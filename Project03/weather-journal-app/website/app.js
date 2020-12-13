/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '1fe34768e8f763c73fb8af6f2bf45812';
const newZip = document.getElementById('zip').value;
const newFeeling = document.getElementById('feelings').value;


// add eventlistener with callback action
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
getWeather(baseURL, newZip, apiKey)
}

// Fetch openweatherMap API
const getWeather = async (baseURL, newZip, apiKey) => {

    const res = await fetch(baseURL+newZip+apiKey);
    try {

        const data = await res.json();
        console.log(data)
        return data;
    } catch(error) {
        console.log("error", error);
    }
  }


// Async POST request

const postData = async (url = '', data = {})=> {
    console.log(data);

    const res = await fetch (url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
}




// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



