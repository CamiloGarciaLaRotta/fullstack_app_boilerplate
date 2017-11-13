import {Grid, Row} from 'react-bootstrap';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Content from './Content';


const App = ({foo}) => {
    return (
        <div>
        <Grid fluid>
            <Row>
            <div className="jumbotron text-center">
                {/* Trying to display the foo */}
                <h1>Dummy App { foo }</h1>
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
        </Grid>
        </div>
    );
}; 

App.PropTypes = {
    server : PropTypes.string,
}

export default App;
