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
        this.props.getDataCart();
    }

    removeItemFromCart = itemId => {
        this.props.removeFromCart(itemId);
    }

    changeAmountOfBooksInCart = (itemId, value) => {
        this.props.changeAmountOfBooks(itemId, value);
    }

    render() {
        return (
            <section className="container cartSection">
                <h6 className="leftNavBarHeader cartSection-header">Koszyk</h6>
                {console.log(this.props.products.length)}
                
                    {/* {(() => {if (this.props.products.length === 0){
                     return(   <h4 className="bookTitle">Koszyk jest pusty!
                            <Link exact to="/" className="bookTitle" >
                                Wróć do zakupów
                            </Link>
                        </h4>)
                    } else {
                        return(
                            <div className="container">
                                <CartProductsList products={this.props.products} /> 
                                <CartSummary summary={this.props.summary} />
                            </div>
                        )
                    }
                    })()} */}
                        
                    {this.props.products.length === 0 ?
                        <h4 className="bookTitle">Koszyk jest pusty!
                            <Link exact to="/" className="bookTitle" >
                                Wróć do zakupów
                            </Link>
                        </h4>
                        :
                        <div > 
                            <CartProductsList 
                                products={this.props.products} 
                                removeItemFromCart={this.removeItemFromCart}
                                changeAmountOfBooksInCart={this.changeAmountOfBooksInCart} 
                            /> 
                            <CartSummary summary={this.props.summary} />
                        </div>
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