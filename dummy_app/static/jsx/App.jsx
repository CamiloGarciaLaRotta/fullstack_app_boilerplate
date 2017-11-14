import {Grid, Row} from 'react-bootstrap';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import Button from './Button';

// If intensive GET/POST transaction are to occur, consider axios lib

// Stateful Component
class App extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            result: null
        }

         // bind function call to the component
         this.fetch_data = this.fetch_data.bind(this);
    }

    fetch_data()
    {
        const url = 'http://numbersapi.com/42?json';
        fetch(url).then(data => data.json())
                  .then(res => this.setState({result: res.text}))
                  .catch(e => console.log(e));
    }

    render()
    {
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
                {<Content result={this.state.result} />}
                </Row>
                <Row>
                <div className="text-center">
                    <Button
                        className="btn btn-info"
                        onClick={this.fetch_data}>
                        Query Number API
                    </Button>
                </div>
                </Row>
            </Grid>
            </div>
        );
    }
}; 

// typechecking 
App.PropTypes = {
    jsvar : PropTypes.string.isRequired,
}

export default App;
