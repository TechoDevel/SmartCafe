import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default class SimpleButton extends Component {
    static propTypes = {
        btnText: PropTypes.string,
        className: PropTypes.string,
        clickAction: PropTypes.func
    };

    render() {
        const { btnText, className, clickAction } = this.props;

        return(
            <button className={`button ${className}`} onClick={clickAction}>
                {btnText}
            </button>
        );
    }
}
