var ProductsBlock = React.createClass({

  displayName: 'ProductsBlock',

  propTypes: {
    shopName: React.PropTypes.string.isRequired,
    products:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        url: React.PropTypes.string,
        price: React.PropTypes.number.isRequired
      })
    )
  },

  render: function() {
    var productsCode = this.props.products.map( v =>
          React.DOM.tr({key:v.code, className:'Product'}, 
            React.DOM.td({className:'Name ProductInfo'}, v.name),
            React.DOM.td({className:'Price ProductInfo'}, v.price),
            React.DOM.td({className:'Url ProductInfo'}, 
              React.DOM.img({className:'ProductImg', src: `./assets/images/${v.url}.jpg`})
            ),
            React.DOM.td({className:'Quantity ProductInfo'}, v.quantity),
            )
      );

    return React.DOM.div( {className:'ProductsBlock'}, 
      React.DOM.div( {className:'ShopName'}, this.props.shopName ),
      React.DOM.table( {className:'Products'}, 
        React.DOM.tbody( {className:'tbody'}, 
        React.DOM.tr({className:'Product'}, 
          React.DOM.th({className:'ColumnHeaders'}, 'Name'),
          React.DOM.th({className:'ColumnHeaders'}, 'Price'),
          React.DOM.th({className:'ColumnHeaders'}, 'Images'),
          React.DOM.th({className:'ColumnHeaders'}, 'Quantity'),
        ),
          productsCode 
      ) ),
    );
  },

});