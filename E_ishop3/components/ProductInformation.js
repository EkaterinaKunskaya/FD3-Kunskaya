import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/ProductInformation.css';

class ProductInformation extends React.Component {

    static propTypes = {

    };

    state = {
    };

    render() {
        return (
            <div className='ProductInformation'>
                <div className='ProductInformation-title'>{this.props.product.name}</div>
                <div className='ProductInformation-content'>
                    <div className='ProductInformation-text'>
                        <b>Name:</b> {this.props.product.name} <br></br>
                        <b>Price:</b> {this.props.product.price} <br></br>
                        <b>Quantity:</b> {this.props.product.quantity} <br></br>
                    </div>
                    <div>
                        <img className='ProductInformationImg' src={`./assets/images/${this.props.product.url}.jpg`}></img>
                    </div>
                </div>

            </div>
        );
      }

}

export default ProductInformation;