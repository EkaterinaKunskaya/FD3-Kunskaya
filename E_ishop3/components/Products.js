import React from 'react';

import './Products.css';

import Product from './Product';
import ProductInformation from './ProductInformation';
import ProductEditing from './ProductEditing';


import {productsEvents} from './events';

let productsArr=require('../products.json');


class Products extends React.Component {

  state = {
    products: productsArr,
    selectedProductId: null,
    editProductId: null,
    workMode: 0, // 0 - nothing, 1 - view, 2 - editing, 3 - creation
  };

  componentDidMount = () => {
    productsEvents.addListener('EProductClicked',this.productSelected);
    productsEvents.addListener('EProductDeleted',this.productDeleted);
    productsEvents.addListener('EProductEdit',this.productEdit);
    productsEvents.addListener('ENewWorkMode',this.setWorkMode);
  };

  componentWillUnmount = () => {
    productsEvents.removeListener('EProductClicked',this.productSelected);
    productsEvents.removeListener('EProductDeleted',this.productDeleted);
    productsEvents.removeListener('EProductEdit',this.productEdit);
    productsEvents.removeListener('ENewWorkMode',this.setWorkMode);
  };

  productSelected = (id) => {
    (this.state.selectedProductId == id)
    ? 
    this.setState({selectedProductId: null, workMode: 0})
    : this.setState({selectedProductId: id, workMode: 1});
  };

  productDeleted = (id) => {
    let deleteProduct = this.state.products.filter(v => v.code == id);
    if (confirm(`Delete ${deleteProduct[0].name}?`)) {
        this.setState(prevState => ({
            products: prevState.products.filter(v => v.code != id)
        }));
    }
  };

  productEdit = (id) => {
    this.setState({editProductId: id, workMode: 2});
  };

  cbProductEdit = (product) => {
    this.setState({ editProduct: product })
  };

  /*saveProduct = () => {
    const products = this.state.products;
    const editProduct = this.state.editProduct;
    let newArrayProducts = products.map((el) => el.id !== editProduct.id ? el : editProduct);
    const isOldProduct = newArrayProducts.some((el) => el.id === editProduct.id);
    !isOldProduct && newArrayProducts.push(editProduct)

    this.setShowReduction(false);
    this.setState({
        products: newArrayProducts,
        editProduct: defaultProduct
    })
  };*/

  setWorkMode = (newWorkMode) => {
    if (newWorkMode === 0) this.setState({workMode: 0});
  }

  render() {

    const productsCode=this.state.products.map( v =>
      <Product key={v.code}
        id={v.code} name={v.name} 
        price={v.price} url={v.url}
        quantity={v.quantity}
        selectedAnswerCode={this.state.selectedAnswerCode}
        selected={(v.code == this.state.selectedProductId) ? true : false}
      />
    );

    let selectedProduct = this.state.products.find((e) => e.code === this.state.selectedProductId);
    let editProduct = this.state.products.find((e) => e.code === this.state.editProductId);


        
    return (
      <div>
        <div className='ProductsContainer'>
          <table className='Products'>
            <tbody className='tbody'>
              <tr className='Product'>
                  <th className='ColumnHeaders'>Name</th>
                  <th className='ColumnHeaders'>Price</th>
                  <th className='ColumnHeaders'>Images</th>
                  <th className='ColumnHeaders'>Quantity</th>
                  <th className='ColumnHeaders'>Control</th>
              </tr>
              {productsCode}
            </tbody>
          </table>
          {(this.state.workMode === 1) && <ProductInformation product={selectedProduct} />}
          {(this.state.workMode === 2) && <ProductEditing product={editProduct} 
          cbEditProduct={this.cbProductEdit} 
          />}
        </div>
        <button className='NewProductBtn' onClick={this.deleteProduct}>New product</button>
      </div>
      

    );

  }

}

export default Products;