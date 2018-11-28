import React, { Component, Fragment } from 'react';

export default class Waiter extends Component {
    componentWillMount() {
        document.title = `${document.title} - Waiter` ;
    }

    render() {
        return (
            <h3>
                Waiter
            </h3>
        );
    }
}
