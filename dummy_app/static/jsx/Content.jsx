import React from 'react';

// Stateless Functional Component 
const Content = ({result}) => {
    return (
        <div className="col-sm-10 col-sm-offset-1">
            <p>
            {
                result || 
                "Visit the url .../data?data=<whatever> to test the backend \
                or click the button below to query a free online API" 
            }
            </p>
        </div>
    );
};
export default Content;