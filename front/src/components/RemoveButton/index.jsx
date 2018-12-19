import React, { Component } from 'react';

import './style.less';

import CircleButton from '../CircleButton';

export default class RemoveButton extends Component{
    render() {
        return (
            <CircleButton className="remove" />
        );
    }
}
