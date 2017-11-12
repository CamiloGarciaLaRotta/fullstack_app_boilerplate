# Full Stack App Boilerplate Code
Flask + React + Webpack

## Table of Contents
1. [Overview](#overview)
2. [Setup](#setup)
3. [Configuration](#configuration)

## Overview
```
.gitignore
README.md
Procfile                        -> Configuration for Continous
runtime.txt                     -> Deployment through Heroku
dummy_app
+---server                      -> All Flask logic
|   |   requirements.txt        -> Python dependencies: Flask
|   |   server.py
|   |   
|   \---.venv
|               
\---static                      
    |   index.html
    |   package-lock.json
    |   package.json            -> Node dependencies: Webpack, Babel, React
    |   webpack.config.js       -> Configuration of Webpack bundler 
    |   
    +---dist                    -> Files to distribute to client
    |       bundle.js           -> Bundle of all js files to distribute
    |       icon.ico
    |       styles.css
    |       
    +---js                      -> All React logic
    |       App.jsx             -> Main component
    |       index.jsx           -> Single entry point to the js bundle
    |       
    \---node_modules
```

## Setup

Backend Dependencies
```bash
python -m venv venv
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

Specify how to process each file before bundling -> compile ES6 to ES5
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
