# Evaluate a news article with Natural Language Processing

The 4th project in the Udacity Front-end Developer Nanodegree program.

This project requires to build a web tool that allows users to run Natural Language Processing (NLP) on any text. The project is developed using Webpack and the student adds to his experience building with the following tools:

* HTML
* SCSS
* Javascript
* Node
* Express
* MeaningCloudAPI
* Jest
* Workbox

## Installation

### 1 Getting Started

Make sure Node and npm are installed from the terminal.

node -v
npm -v

Fork this repo and clone to begin your project setup and install everything: 

`cd` <project directory>
`npm install`

Install the following loaders and plugins

- npm i -D @babel/core @babel/preset-env babel-loader
- npm i -D style-loader node-sass css-loader sass-loader
- npm i -D clean-webpack-plugin
- npm i -D html-webpack-plugin
- npm i -D mini-css-extract-plugin
- npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

### 2 Setting up the API

Sign up for the sentiment analyses API key at meaningcloud.com

You'll need t configure environment variables using the dotenv package:

Use npm to install the dotenv package - npm install dotenv 

Create a new .env file in the root of your project.

Fill the .env file with your API keys like this:

API_ID=**************************

API_KEY=**************************

### 3 Setup service workers for offline functionality

Require the plugin, by appending the new plugin statement in your webpack.prod.js file.

const WorkboxPlugin = require('workbox-webpack-plugin')

Instantiate the new plugin in the plugin list.

    plugins: [
        new WorkboxPlugin.GenerateSW(),
    ]

use npm to install the plugin:

npm install workbox-webpack-plugin --save-dev

### 4 Run the app
npm run build-prod : builds project

npm start : Run project

The app opens on localhost 8080.

The server listens on port 8081


## Known issues
- There is a compatibility issue with the terser plugin. The plugin needs to be downgrade in the package.json file to

 > "terser-webpack-plugin": "^4.2.3"

 Then run

  - npm i
  - npm run build-prod


- Currently the production side builds but the app has no functionality