import React from 'react';
import PropTypes from 'prop-types';

// Stateless Functional Component 
const Button = ({onClick, children, className=''}) => 
<button 
    className={className}
    onClick={onClick}>
    {children}
</button>

Button.PropTypes = {
    onClick:   PropTypes.func.isRequired,
    className: PropTypes.string,
    children:  PropTypes.node.isRequired
}

Button.defaultProps = {
    className: ''
}

export default Button;