import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types'

import Header from '../../components/Header';
import AddButton from '../../components/AddButton';
import Order from './containers/Order';
import CategoryPopup from './containers/OrderPopup/CategoryPopup';
import DishPopup from './containers/OrderPopup/DishPopup';

import fetchMenuData from './actions';

import unrealResponse from '../../testData/getMenu.json'

class Waiter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOrderPopup: false
        };
        this.createOrder = this.createOrder.bind(this);
    }

    static propTypes = {
        fetchMenuData: PropTypes.func
    };

    componentWillMount() {
        document.title = `${document.title} - Waiter` ;
    }

    togglePopup = () => this.setState({showOrderPopup: !this.state.showOrderPopup});

    createOrder() {
        /*axios({
            method: 'GET',
            url: 'http://localhost:3030/dishes'
        }).then(response => {
            console.log('response');
            this.props.fetchMenuData(response);
            this.togglePopup();
        }).catch(error => {
            console.log(unrealResponse);
            this.props.fetchMenuData(unrealResponse);
            this.togglePopup();
        })*/
        this.togglePopup();
        this.props.fetchMenuData(unrealResponse);

    }

    render() {
        return (
            <Fragment>
                {this.state.showOrderPopup && <CategoryPopup closePopup={this.togglePopup} />}
                <Header role="waiter"/>
                <Order />
                <AddButton clickAction={this.createOrder} />
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMenuData: (menuData) => dispatch(fetchMenuData(menuData))
});

export default connect(null, mapDispatchToProps)(Waiter);
