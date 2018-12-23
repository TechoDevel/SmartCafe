import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.less';
import { buttonText } from '../../../../../assets/constants';

import CategoryItem from '../../../../../components/CategoryItem';
import SimpleButton from '../../../../../components/SimpleButton';

class CategoryPopup extends Component {
    static propTypes = {
        closePopup: PropTypes.func,
        menu: PropTypes.arrayOf(
            PropTypes.shape({
                category: PropTypes.string,
                dishes: PropTypes.array
            })
        )
    };

    render() {
        const { menu, closePopup } = this.props;

        return (
            <div className="wrap">
                <div className="popup">
                    <div className="popup__form">
                        <span className="close" onClick={closePopup}>+</span>
                        <div className="popup__content">
                            {menu.menu.map(item => <CategoryItem name={item.category} dishes={item.dishes} />)}
                        </div>
                        <SimpleButton
                            btnText={buttonText.complete}
                            className="btnComplete"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    menu: state.waiterReducer.menu
});

export default connect(mapStateToProps)(CategoryPopup);
