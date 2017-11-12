# Full Stack App Boilerplate Code
Flask + React + Webpack

## Table of Contents
1. [Overview](#overview)
2. [Setup](#setup)
3. [Configuration](#configuration)

## Overview
```
Procfile                        -> Heroku's instructions on how to setup the app
runtime.txt                     -> Heroku's Python version to use 

# the following 3 are needed at the root dir for Heroku to setup the Beta and Prod machines

package.json                    -> Node dependencies: Webpack, Babel, React
requirements.txt                -> Python dependencies: Flask
webpack.config.js               -> Configuration of Webpack bundler

dummy_app
+---server                      
|       server.py               -> All Flask logic
|        
+---static              
    |   index.html 
    |   
    +---dist                    -> Files to distribute to client
    |       bundle.js           -> Bundle of all js files to distribute
    |       icon.ico
    |       styles.css
    |       
    +---js                      -> All React logic
            App.jsx             -> Main component
            index.jsx           -> Single entry point to the js bundle
  
```

## Setup

Backend Dependencies
```bash
python -m venv .venv
pip install flask
pip freeze > requirements.txt
```

Frontend Dependencies
```bash
npm init
npm install --save react react-dom
# compiler
npm install --save babel-core
npm install --save babel-preset-es2015
npm install --save babel-preset-react
# bundler 
npm install --save webpack babel-loader

```


## Configuration

Heroku Configuration
How to setup Beta and Production machines: install node dependencies and bundle the js[x] files before running the server
```bash
web: npm install && npm run build && python dummy_app/server/server.py
```


```json
# package.json
"engines" : { "node" : "8.9.1" }, 
  "scripts": {
    "build": "webpack -p --progress --config webpack.config.js",
    "dev-build": "webpack --progress -d --config webpack.config.js",
    "watch": "webpack --progress -d --config webpack.config.js --watch",
    "postinstall": "npm run build"
}
```


Specify how to process each file before bundling -> compile ES6 to ES5 using Babel
```javascript
# webpack.config.js
module : {
    rules : [
        {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }
    ]
}
```

Add scripts to bundle and watch for changes of static js[x] files
```json
# package.json
"scripts": {
  "build": "webpack -p --progress --config webpack.config.js",
  "dev-build": "webpack --progress -d --config webpack.config.js",
  "watch": "webpack --progress -d --config webpack.config.js --watch"
}
```
