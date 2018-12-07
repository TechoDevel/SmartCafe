import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default class CircleButton extends Component{
    static propTypes = {
        classNameWrap: PropTypes.string,
        classNameContent: PropTypes.string,
    }

    render() {
        return (
            <div className={`btn ${this.props.classNameWrap}`}>
                <span className={`content ${this.props.classNameWrap}`}>+</span>
            </div>
        );
    }
}
