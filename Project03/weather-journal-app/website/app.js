/* Global Variables */
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip="
const apiKey = 'f2e89ddc1b6bbdf69468c5b14dccd167';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// add eventlistener with callback action
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const newZip = document.getElementById('zip').value;
    const newFeeling = document.getElementById('feelings').value;

getWeather(baseURL, newZip, apiKey)

.then (function(data) {
    console.log(data);
    postData('/add', {date: newDate, temp: data.main.temperature, feeling: newFeeling})
})
.then(
    updateUI()
)
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
        body: JSON.stringify({
            temp: data.temp,
            date: data.date,
            feeling: data.response,
        }),

    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
}

// Update UI async

const updateUI = async () => {
    const request = await fetch('/all');
    try{
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.content;
    }
    catch (error) {
        console.log("error", error);
    }
};





