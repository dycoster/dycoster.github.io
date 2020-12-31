const dotenv = require('dotenv');
dotenv.config();


var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
const fetch = require('node-fetch')


// var json = {
//     'title': 'test json response',
//     'message': 'this is a message',
//     'time': 'now'
// }

// var textapi = new meaningCloud ({
//     application_id: process.env.API_ID,
//     application_key: process.env.API_KEY
// });

const app = express()

const cors = require('cors')

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(express.static('dist'))

// console.log(JSON.stringify(mockAPIResponse))

// API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
console.log(`Your API key is ${process.env.API_KEY}`);

let textInput = []


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// async POST request
app.post('/add', async function(req, res) {
    textInput = req.body.name;
    console.log(`you entered: ${textInput}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${textInput}&lang=en`

    const response = await fetch(apiURL)
    const apiData = await response.json()
    console.log(apiData)
    res.send(apiData)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
