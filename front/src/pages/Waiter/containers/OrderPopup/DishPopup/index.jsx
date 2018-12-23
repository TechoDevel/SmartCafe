import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';
import { buttonText } from '../../../../../assets/constants';

import DishItem from '../../../../../components/DishItem';
import SimpleButton from '../../../../../components/SimpleButton';

export default class DishPopup extends Component {
    static propTypes = {
        categoryName: PropTypes.string
    };


    render() {
        return (
            <div className="wrap">
                <div className="popup">
                    <div className="popup__form">
                        <span className="close">+</span>
                        <div className="popup__content">
                            <DishItem name="Борщ" />
                            <DishItem name="Борщ" />
                            <DishItem name="Борщ" />
                            <DishItem name="Борщ" />
                            <DishItem name="Борщ" />
                            <DishItem name="Борщ" />
                            <DishItem name="Борщ" />
                            <DishItem name="Борщ" />
                            <DishItem name="Борщ" />
                            <DishItem name="Борщ" />
                            <DishItem name="Борщ" />
                            <DishItem name="Борщ" />
                        </div>
                        <SimpleButton btnText={buttonText.back} className="btnBack" />
                    </div>
                </div>
            </div>
        );
    }
}
