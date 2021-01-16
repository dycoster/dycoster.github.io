// API
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY

// allows to work with file paths and directories (https://www.w3schools.com/nodejs/ref_path.asp)
const path = require('path')

// require express to run server and routes similar to Project 3
const express = require('express')
const app = express()

// middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(bodyParser.json())

//   Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// to allow making fetch requests in server
const fetch = require('node-fetch')

// Initialize the main project folder
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// async POST request inspriration from https://knowledge.udacity.com/questions/287028
app.post('/add', async (req, res)=> {
    console.log(req.body)
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${req.body}&lang=auto`)

    try {
        const apiData = await response.json()
        console.log(apiData)
        res.send(apiData);
    } catch (error) {
        console.log('error', error)
    }
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
