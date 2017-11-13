import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Although not adviced (prioritize AJAX calls),
// to get variables from python backend passed as attribute 
// of a div w/ id="root" assign as props to react component App
// <App { ...(root.dataset) } />

ReactDOM.render( <App />, document.getElementById('root') );
