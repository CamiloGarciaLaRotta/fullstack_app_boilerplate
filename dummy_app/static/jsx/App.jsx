import {Grid, Row} from 'react-bootstrap';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Content from './Content';


const App = ({jsvar}) => {
    return (
        <div>
        <Grid fluid>
            <Row>
            <div className="jumbotron text-center">
                {/* Trying to display the foo */}
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
        </Grid>
        <Grid>
            <Row>
            <div className="col-lg-10 col-lg-offset-1 text-center">
                    <hr />
                    <p className="text-muted small">
                        Variable in Component obtained from server through props: 
                        <code>{jsvar}</code>
                    </p>
            </div>
            </Row>
        </Grid>
        </div>
    );
}; 

App.PropTypes = {
    server : PropTypes.string,
}

export default App;
