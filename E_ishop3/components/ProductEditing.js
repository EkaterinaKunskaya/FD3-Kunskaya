import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/ProductInformation.css';

import FormProduct from './FormProduct';

class ProductEditing extends React.Component {

    static propTypes = {

    };

    state = {

    };

    saveProduct = (name, price, url, quantity) => {
        console.log(name);
        console.log(price);
        console.log(url);
        console.log(quantity);


    };


    render() {
        return (
            <div className=''>
                <div className=''>Edit existing Product</div>
                <FormProduct product={this.props.product} 
                cbEditProduct={this.props.cbEditProduct}
                saveProduct={this.saveProduct}
                cancelEdit={this.props.cancelEdit}
                />
            </div>
        );
      }

}

export default ProductEditing;