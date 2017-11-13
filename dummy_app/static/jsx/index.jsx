import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// trying to recieve the python variable foo
// and assign it to App's props item bar
ReactDOM.render(
    <App bar={ document.getElementById('content').getAttribute('bar') } />,
    document.getElementById('content')
);
