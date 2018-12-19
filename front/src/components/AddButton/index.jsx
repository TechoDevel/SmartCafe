import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

import CircleButton from '../CircleButton';

export default class AddButton extends Component{
    static propTypes = {
        clickAction: PropTypes.func
    };

    render() {
        return (
            <CircleButton className="add" onClick={this.props.clickAction} />
        );
    }
}
