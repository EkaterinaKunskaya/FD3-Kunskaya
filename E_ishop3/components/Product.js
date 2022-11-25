import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

import {productsEvents} from './events';

class Product extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.number,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        selected: PropTypes.bool,
    };

    state = {
        selectedProductId: this.props.selectedProductId,
    };


    selectProduct = () => {
        if (this.props.id) productsEvents.emit('EProductClicked', this.props.id);
    };

    deleteProduct = (e) => {
        e.stopPropagation();
        productsEvents.emit('EProductDeleted', this.props.id);
    };

    editProduct = (e) => {
        e.stopPropagation();
        productsEvents.emit('EProductEdit', this.props.id);
    };

    render() {
        return (
            <tr className={`Product ${(this.props.selected)? 'active' : ''}`}
            onClick={this.selectProduct}>
                <td className='ProductInfo Name'>{this.props.name}</td>
                <td className='ProductInfo Price'>{this.props.price}</td>
                <td className='ProductInfo Url'>
                    <img className='ProductImg' src={`./assets/images/${this.props.url}.jpg`}></img>
                </td>
                <td className='ProductInfo Quantity'>{this.props.quantity}</td>
                <td className='ProductInfo'>
                    <button className='ProductControlEdit'
                    onClick={this.editProduct}>Edit</button>
                    <button className='ProductControlDelete'
                    onClick={this.deleteProduct}>Delete</button>
                </td>
            </tr>
        );
      }

}

export default Product;