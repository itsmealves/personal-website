import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
    const containerStyle = {
        margin: '3rem auto',
        maxWidth: '600px',
    };
    
    return (
        <div style={containerStyle}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}

export default Container;