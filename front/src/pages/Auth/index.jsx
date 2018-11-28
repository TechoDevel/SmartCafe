import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import SimpleButton from '../../components/SimpleButton';

import './style.less';
import logo from '../../assets/Logo.png';
import { buttonText } from '../../assets/constants';

export default class Auth extends Component {
    state = {
        role: null,
        login: '',
        password: ''
    };

    componentWillMount() {
        document.title = `${document.title} - Authorization`;
    }

    updateLoginValue = event => {
        this.setState({
            login: event.target.value
        });
    };

    updatePasswordValue = event => {
        this.setState({
            password: event.target.value
        });
    };

    render() {
        const {
            role,
            login,
            password
        } = this.state;

        return (
            <div className="auth">
                <img alt="logo" src={logo} className="auth__logo" />
                <div className="form">
                    <div className="form__inputs">
                        <input
                            type="text"
                            className="input login"
                            placeholder="Login"
                            onChange={event => this.updateLoginValue(event)}
                            value={login}
                        />
                        <input
                            type="password"
                            className="input password"
                            placeholder="Password"
                            onChange={event => this.updatePasswordValue(event)}
                            value={password}
                        />
                    </div>
                    <Link to={`/${role}`} className="link">
                        <SimpleButton
                            className="btnAuth"
                            btnText={buttonText.auth}
                        />
                    </Link>
                </div>
            </div>
        );
    }
}
