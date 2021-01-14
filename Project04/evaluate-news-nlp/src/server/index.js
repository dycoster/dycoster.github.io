const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const cors = require('cors')
const apiKey = process.env.API_KEY

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// async POST request
app.post('/add', async (req, res)=> {
    console.log(req.body)
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&txt=${req.body}&lang=auto`)

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
