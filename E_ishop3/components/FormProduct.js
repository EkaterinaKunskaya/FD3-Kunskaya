import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/ProductInformation.css';

import {productsEvents} from './events';


class FormProduct extends React.Component {

    static propTypes = {

    };

    state = {
        name: this.props.product.name,
        price: this.props.product.price,
        url: this.props.product.url,
        quantity: this.props.product.quantity,
    };

    onChangeName = (e) => this.setState({name: e.target.value});
    onChangePrice = (e) => this.setState({price: e.target.value});
    onChangeUrl = (e) => this.setState({url: e.target.value});
    onChangeQuantity = (e) => this.setState({quantity: e.target.value});

    

    saveForm = () => {
        const question = confirm("Do you want to save?");
        question && this.props.saveProduct(this.state.name, this.state.price, this.state.url, this.state.quantity);
        productsEvents.emit('ENewWorkMode', 0);
    };

    render() {
        return (
            <div className=''>
                <div className=''>ID: {this.props.product.code}</div>
                <div>
                    <div>
                        <div>
                            <label htmlFor='name'>Name:</label>
                            <input value={this.state.name} 
                            type='text' 
                            name='name' 
                            id='name' 
                            onChange={this.onChangeName}
                            autoComplete="off"/>
                        </div>
                        <div>
                            <label htmlFor='price'>Price:</label>
                            <input value={this.state.price} 
                            type='text' 
                            name='price' 
                            id='price' 
                            onChange={this.onChangePrice}
                            autoComplete="off"/>
                        </div>
                        <div>
                            <label htmlFor='url'>URL:</label>
                            <input value={this.state.url}
                            type='text' 
                            name='url' 
                            id='url' 
                            onChange={this.onChangeUrl}
                            autoComplete="off"/>
                        </div>
                        <div>
                            <label htmlFor='quantity'>Quantity:</label>
                            <input value={this.state.quantity}
                            type='text' 
                            name='quantity' 
                            id='quantity' 
                            onChange={this.onChangeQuantity}
                            autoComplete="off"/>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <button className='' onClick={this.saveForm}>Save</button>
                <button className='' onClick={this.cancelForm}>Cancel</button>
            </div>
        );
      }

}

export default FormProduct;