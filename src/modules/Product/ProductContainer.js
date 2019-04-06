import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from '../Home/Home.actions';
import { addToCart } from '../Cart/Cart.actions';

import Product from './Product';


class ProductContainer extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log('propsy product Containera', this.props);
        console.log('ProductContainer - wyciagniecie id selectedBook', this.props.match.params.bookId);
        this.props.getBook(parseInt(this.props.match.params.bookId));
    }

    addItemToCart = item => {
        this.props.addToCart(item);
        this.props.history.push('/cart');
    }

    render() {
        return (
            <Product selectedBook={this.props.selectedBook} addItemToCart={this.addItemToCart} />
        )
    }
}

const mapStateToProps = function (store) {
    return {
        selectedBook: store.HomeReducer.selectedBook
    };
};

const mapDispatchToProps = {
    getBook,
    addToCart,
  };

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);