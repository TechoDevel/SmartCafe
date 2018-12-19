import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

import dessertImg from '../../assets/img/categories/dessert.png';
import drinksImg from '../../assets/img/categories/drinks.png';
import dishFirstImg from '../../assets/img/categories/first-dish.png';
import dishSecondImg from '../../assets/img/categories/second-dish.png';
import arrow from '../../assets/img/right-arrow.png';

export default class CategoryItem extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    state = {
      categoryImg: {}
    };

    componentWillMount() {
        switch(this.props.name) {
            case 'Первые блюда':
                this.setState({
                    categoryImg: dishFirstImg
                });
                break;
            case 'Вторые блюда':
                this.setState({
                    categoryImg: dishSecondImg
                });
                break;
            case 'Десерты':
                this.setState({
                    categoryImg: dessertImg
                });
                break;
            case 'Напитки':
                this.setState({
                    categoryImg: drinksImg
                });
                break;
        }
    }

    render() {
        return (
            <div className="category">
                <img src={this.state.categoryImg} className="category-img" alt="" />
                <span className="category-name">{this.props.name}</span>
                <img src={arrow} className="arrow" alt="" />
            </div>
        );
    }
}
