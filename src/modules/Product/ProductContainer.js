import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBook } from '../Home/Home.actions';
import Product from './Product';

class ProductContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('propsy product Containera', this.props);
        console.log('ProductContainer - wyciagniecie id selectedBook', this.props.match.params.bookId);
        this.props.dispatch(getBook(parseInt(this.props.match.params.bookId)));
    }

    render() {
        return (
            <Product selectedBook={this.props.selectedBook} />
        )
    }
}

const mapStateToProps = function (store) {
    return {
        selectedBook: store.books.selectedBook
    };
};

export default connect(mapStateToProps)(ProductContainer);