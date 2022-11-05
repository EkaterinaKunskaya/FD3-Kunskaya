var Products = React.createClass({

    displayName: 'Products',

    getInitialState: function () {
        return {
            products: [
                {code: 1, name: 'product 1', price: 10, url: '1', quantity: 2},
                {code: 2, name: 'product 2', price: 20, url: '2', quantity: 20},
                {code: 3, name: 'product 3', price: 30, url: '3', quantity: 9},
                {code: 4, name: 'product 4', price: 40, url: '4', quantity: 33},
                {code: 5, name: 'product 5', price: 50, url: '5', quantity: 15},
                {code: 6, name: 'product 6', price: 60, url: '6', quantity: 6},
                {code: 7, name: 'product 7', price: 70, url: '7', quantity: 3},
                {code: 8, name: 'product 8', price: 80, url: '8', quantity: 8},
                {code: 9, name: 'product 9', price: 90, url: '9', quantity: 101},
                {code: 10, name: 'product 10', price: 100, url: '10', quantity: 1}
            ],
            selectedProductId: null,
            deletedProductId: null,
            // activeClass:  '',
        };
    },

    productSelected: function (id) {
        console.log('выбран продукт с id ' + id);
        this.setState({selectedProductId: id}, this.processListSelect);
    },
/*
    processListSelect: function () {
        (this.state.selectedProductId && this.state.activeClass !='active')
        ? 
        this.setState( ()=>{return {activeClass:  'active'}} )
        : this.setState(()=>{return {activeClass:  ''}} )
    },
*/
    productDeleted: function (id) {
        this.setState({
            deletedProductId: id
        }, this.processListDelete);
    },

    processListDelete: function () {
        let selectProduct = this.state.products.filter(v => v.code == this.state.deletedProductId);
        if (confirm(`Delete ${selectProduct[0].name}?`)) {
            this.setState(prevState => ({
                products: prevState.products.filter(v => v.code != this.state.deletedProductId)
            }));
        }
    },

    render: function () {

        var productsCode = this.state.products.map(v =>
            React.createElement(Product, {
                key: v.code,
                className: 'Product',
                id: v.code,
                name: v.name,
                price: v.price,
                url: v.url,
                quantity: v.quantity,
                selected: (v.code == this.state.selectedProductId) ? true : false,
                cbSelected: this.productSelected,
                cbDeleted: this.productDeleted,
                selectedProductId: this.state.selectedProductId,
            })
        );

        return (
            React.DOM.table({className: 'Products'},
                React.DOM.tbody({className: 'tbody'},
                    React.DOM.tr({className: 'Product'},
                        React.DOM.th({className: 'ColumnHeaders'}, 'Name'),
                        React.DOM.th({className: 'ColumnHeaders'}, 'Price'),
                        React.DOM.th({className: 'ColumnHeaders'}, 'Images'),
                        React.DOM.th({className: 'ColumnHeaders'}, 'Quantity'),
                        React.DOM.th({className: 'ColumnHeaders'}, 'Control'),
                    ),
                    productsCode
                )
            )
        );
    }

});