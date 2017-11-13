import {Grid, Row} from 'react-bootstrap';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import Button from './Button';

// If intensive GET/POST transaction are to occur, consider axios lib

var fetch_data = () => {
    // TODO try axios
    //var url = 'https://jsonplaceholder.typicode.com/posts/1';
    var url = '/data'
    fetch(url).then(res => console.log(res.json()))
              .catch(e => console.log(e));
}

const App = () => {
    return (
        <div>
        <Grid fluid>
            <Row>
            <div className="jumbotron text-center">
                <h1>Dummy App</h1>
                <hr className="header_hr" />
                <h3>Should be doing HW instead</h3>
                <small>srlsy tho</small>
            </div>
            </Row>
        </Grid>
        <Grid>
            <Row>
            <Content />
            </Row>
            <Row>
            <div className="text-center info">
                <Button
                    className="btn btn-info"
                    onClick={() => fetch_data()}>
                    Get Dummy Data
                </Button>
            </div>
            </Row>
        </Grid>
        </div>
    );
}; 

// typechecking 
App.PropTypes = {
    jsvar : PropTypes.string.isRequired,
}

export default App;
