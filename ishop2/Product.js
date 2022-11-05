var Product = React.createClass({

    displayName: 'Product',
  
    propTypes: {
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        url: React.PropTypes.string,
        price: React.PropTypes.number.isRequired,
        quantity: React.PropTypes.number.isRequired,
        selected: React.PropTypes.bool,
        cbSelected: React.PropTypes.func.isRequired,
        cbDeleted: React.PropTypes.func.isRequired,
        selectedProductId: React.PropTypes.number,
    },

    getInitialState: function() {
        return { 
            selectedProductId: null,
            //activeClass: '',
        };
    },
  
    selectProduct: function(e) {
        if (this.props.id) this.props.cbSelected(this.props.id);

       // this.setState({selectedProductId: this.props.id}, this.processListSelect); 
    },
/*
    processListSelect: function() {
       (this.props.selected && this.state.activeClass != 'active')
        ? 
        this.setState( ()=>{return {activeClass:  'active'}})
        : this.setState(()=>{return {activeClass:  ''}})
    },
*/
    deleteProduct: function(e) {
        e.stopPropagation();
        this.props.cbDeleted(this.props.id);
    },

    render: function() {
      return (
        React.DOM.tr({
            className:`Product ${(this.props.selected)? 'active' : '' /* this.state.activeClass*/}`,
            onClick: this.selectProduct,
            }, 
            React.DOM.td({className:'Name ProductInfo'}, this.props.name),
            React.DOM.td({className:'Price ProductInfo'}, this.props.price),
            React.DOM.td({className:'Url ProductInfo'}, 
                React.DOM.img({className:'ProductImg', src: `./assets/images/${this.props.url}.jpg`})
            ),
            React.DOM.td({className:'Quantity ProductInfo'}, this.props.quantity),
            React.DOM.td({className:'ProductInfo'}, 
                React.DOM.button({
                    className:'ProductControlDelete', 
                    onClick: this.deleteProduct
                }, 'Delete')
            ),
        )
      );
    }
  
});