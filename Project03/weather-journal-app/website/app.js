/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ d.getMonth()+'.'+ d.getFullYear();


// add eventlistener with callback action
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const newZip = document.getElementById('zip').value;
    const newFeeling = document.getElementById('feelings').value;

    const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=${newZip},us&appid=`
    const apiKey = 'f2e89ddc1b6bbdf69468c5b14dccd167';

getWeather(baseURL, apiKey)

.then (function(data) {
    postData('http://localhost:3030/add', {name: data.name, temperature: data.main.temp, date: newDate, user_response: newFeeling})
})
.then(function(newData) {
    updateUI()
})
}

// Fetch openweatherMap API
const getWeather = async (baseURL, apiKey) => {

    const res = await fetch(baseURL+apiKey);
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
    const response = await fetch (url, {
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
    }catch (error) {
        console.log("error", error);
    }
}

// Update UI async

const updateUI = async () => {
    const request = await fetch('http://localhost:3030/all');
    try{
        const allData = await request.json();
        document.getElementById('name').innerHTML = allData.name
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temperature;
        document.getElementById('content').innerHTML = allData.user_response;
        console.log(allData)
    }
    catch (error) {
        console.log("error", error);
    }
};





