import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProductsList from './CartProductsList';
import CartSummary from './CartSummary';
// import { getAllProductsInCart } from './Cart.actions';
import * as cartActions from './Cart.actions';


class CartContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllProductsInCart();
    }

    

    render() {
        return (
            <section className="container cartSection">
                <h6 className="leftNavBarHeader cartSection-header">Koszyk</h6>
                {console.log(this.props.products.length)}
                {
                    this.props.products.length === 0 ?
                        <h4 className="bookTitle">Koszyk jest pusty!
                            <Link exact to="/" className="bookTitle" >
                                Wróć do zakupów
                            </Link>
                        </h4>
                        :
                        <CartProductsList products={this.props.products} /> &&
                        <CartSummary summary={this.props.summary} />
                }
            </section>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        products: store.CartReducer.products,
        summary: store.CartReducer.summary,
    };
};

const mapDispatchToProps = {
    ...cartActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartContainer);