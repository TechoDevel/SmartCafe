import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

import './style.less';

import foodImg from '../../assets/img/food.png';
import { orderInfo } from '../../assets/constants';

import dataInfo from '../../testData/orderInfo.json';

export default class Order extends Component {
    static propTypes = {
        order: PropTypes.shape({
            table: PropTypes.number,
            guestsCount: PropTypes.number,
            description: PropTypes.array
        }),
        orderNumber: PropTypes.number
    }

    render() {
        const { orderNumber, order } = dataInfo;

        return (
            <div className="order">
                <img src={foodImg} alt="" className="order__img" />
                <div className="order-info">
                    <p className="order-info__title">{`${orderInfo.title} ${orderNumber}`}</p>
                    <p className="order-info__text">{`${orderInfo.table} ${order.table}`}</p>
                    <p className="order-info__text">{`${orderInfo.guestsCount} ${order.guestsCount}`}</p>
                    <p className="order-info__text">{`${orderInfo.description} ${order.description.join(', ')}`}</p>
                </div>
            </div>
        );
    }
}
