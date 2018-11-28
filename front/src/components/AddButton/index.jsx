import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default class AddButton extends Component{
    render() {
        return (
            <div className="add-btn">
                <span className="add-btn__content">+</span>
            </div>
        );
    }
}
