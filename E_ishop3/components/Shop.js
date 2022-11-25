import React from 'react';

import './Shop.css';

import ShopName from './ShopName';
import Products from './Products';


class Shop extends React.Component {

  render() {

    return (
      <div className='Shop'>
        <ShopName />
        <Products />
      </div>
    );

  }

}

export default Shop;