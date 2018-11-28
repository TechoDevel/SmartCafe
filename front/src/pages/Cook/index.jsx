import React, { Component, Fragment } from 'react';

export default class Cook extends Component {
    componentWillMount() {
        document.title = `${document.title} - Cook` ;
    }

    render() {
        return (
            <h3>
                Cook
            </h3>
        );
    }
}
