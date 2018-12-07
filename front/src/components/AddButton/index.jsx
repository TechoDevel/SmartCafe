import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

import CircleButton from '../CircleButton';

export default class AddButton extends Component{
    render() {
        return (
            <CircleButton classNameWrap="add" classNameContent="add-content"/>
        );
    }
}
