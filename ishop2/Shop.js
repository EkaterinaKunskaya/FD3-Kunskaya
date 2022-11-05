var Shop = React.createClass({

  displayName: 'Shop',

  render: function() {
    return React.DOM.div( {className:'Shop'}, 
      React.createElement(ShopName),
      React.createElement(Products)
    );
  },

});