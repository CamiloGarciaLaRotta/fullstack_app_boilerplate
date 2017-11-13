import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// get variables from python backend 
// passed as attribute of div w/ id="root"
// assign as props to react component App
//console.log(root.dataset)
ReactDOM.render(
    <App { ...(root.dataset) } />,
    document.getElementById('root')
);
