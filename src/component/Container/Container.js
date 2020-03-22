import React from 'react';
import './Container.scss';
import PropTypes from 'prop-types';

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

Container.propTypes = {
    children: PropTypes.node,
};

export default Container;