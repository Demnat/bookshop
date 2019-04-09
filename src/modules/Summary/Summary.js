import React, {Component} from 'react';
import SummaryProductsList from './SummaryProductsList';
import Price from '../Home/Price';
import { connect } from 'react-redux';
import {resetDataCart} from '../Cart/Cart.actions';

class Summary extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.resetDataCart();
    }
    
    render() {
        console.log('props summary', this.props)
        return (
            <section className="container cartSection">
                <h6 className="leftNavBarHeader cartSection-header">Podsumowanie zakupów</h6>
                <SummaryProductsList
                    products={this.props.products}
                />
                <div className="container cartSection-pay">
                    <div className="row shoppingWorth">
                        <h4 className="bookTitle shoppingWorth-header">Wartość zakupów:</h4>
                        <p className="bookPrice cartSection-productData-price"><Price price={this.props.summary.price} /></p>
                    </div>
                    <div className="row shoppingWorth">
                        <h4 className="bookTitle shoppingWorth-header">Koszty dostawy:</h4>
                        <p className="bookPrice cartSection-productData-price"><Price price={this.props.summary.postingPrice} /></p>
                    </div>
                    <div className="row shoppingWorth">
                        <h4 className="bookTitle shoppingWorth-header">Zapłacono:</h4>
                        <p className="bookPrice cartSection-productData-price"><Price price={this.props.summary.totalPrice} /></p>
                    </div>
                </div>

            </section>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        products: store.CartReducer.products,
        summary: store.CartReducer.summary,
    };
};

const mapDispatchToProps = {
    resetDataCart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Summary);