import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default class DishItem extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    render() {
        return (
            <div className="dish">
                <span className="remove-dish">&mdash;</span>
                <span className="dish-name">{this.props.name}</span>
                <span className="add-dish">+</span>
            </div>
        );
    }
}
