import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/Logo.png';
import { headerTitle as title } from '../../assets/constants'

export default class Header extends Component {
    static propTypes = {
        roleImg: PropTypes.string
    };

    render() {
        return(
            <header className="header">
                <img src={logo} alt="logo" className="header__logo"/>
                <span className="header__title">{title}</span>
                <img src={this.props.roleImg} alt="" className="header__roleImg" />
            </header>
        );
    }
}
