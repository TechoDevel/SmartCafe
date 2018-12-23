import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default class CircleButton extends Component{
    static propTypes = {
        className: PropTypes.string,
        onClick: PropTypes.func
    };

    render() {
        return (
            <div
                className={`btn ${this.props.className}`}
                onClick={this.props.onClick}
            />
        );
    }
}
