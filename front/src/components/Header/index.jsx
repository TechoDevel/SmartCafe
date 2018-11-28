import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/Logo.png';
import waiterImg from '../../assets/waiter.png';
import cookImg from '../../assets/cook.png';
import { headerTitle as title } from '../../assets/constants';
import './style.less';

export default class Header extends Component {
    static propTypes = {
        role: PropTypes.string
    };

    state = {
        roleImg: {}
    };

    componentWillMount() {
        switch(this.props.role) {
            case 'waiter':
                this.setState({
                    roleImg: waiterImg
                });
                break;
            case 'cook':
                this.setState({
                    roleImg: cookImg
                });
                break;
        }
    }



    render() {
        return(
            <header className="header">
                <img src={logo} alt="logo" className="header__logo"/>
                <span className="header__title">{title}</span>
                <img src={this.state.roleImg} alt="" className="header__roleImg" />
            </header>
        );
    }
}
