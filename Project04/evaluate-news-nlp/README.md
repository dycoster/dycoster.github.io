# Evaluate a news article with Natural Language Processing

The 4th project in the Udacity Front-end Developer Nanodegree program. 
This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on texts. When a user submits any kind of text, the web page will display a sentiment analysis returned from meaningcloud API, based on the contents of the text.



## Build Tools

* HTML
* SCSS
* Javascript
* Node
* Express
* MeaningCloudAPI
* Jest
* Workbox

## Installation

1 Make sure Node and npm are installed from the terminal.

node -v
npm -v

2 Fork this repo and clone to begin your project setup.

3 `cd` into your new folder and run:
- `npm install`

4 Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin


5 Sign up for an API key at meaningcloud.com

6 Configure environment variables using the dotenv package:

- npm install dotenv 
Create a new .env file in the root of your project.
Fill the .env file with your API keys like this:
API_ID=**************************
API_KEY=**************************

7 Setup service workers

Require the plugin, by appending the new plugin statement.
Instantiate the new plugin in the plugin list.

install the plugin using:
npm install workbox-webpack-plugin --save-dev

8 Run app
npm run build-prod : builds project
npm start : Run project
