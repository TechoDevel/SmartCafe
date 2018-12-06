import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import AddButton from '../../components/AddButton';

export default class Waiter extends Component {
    componentWillMount() {
        document.title = `${document.title} - Cook` ;
    }

    render() {
        return (
            <Fragment>
                <Header role="cook"/>
                <AddButton />
            </Fragment>
        );
    }
}
