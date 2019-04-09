import React from 'react';
import Price from '../Home/Price';
import CartDiscountErrorMessage from './CartDiscountErrorMessage'
const CartSummary = (props) => {
    console.log("cart summary", props);
    return (

        <div className="container">
            <div className="row container cartSection-summary">
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <form className="discount">
                        <h4 className="bookTitle">Kod rabatowy:</h4>
                        <CartDiscountErrorMessage discount={props.discount} />
                        <input type="text" className="discountCode" id="code" />
                        <button className="discountButton" type="button" onClick={() => props.addDiscountToCart(document.getElementById('code').value)} >Zastosuj</button>
                    </form>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8 col-xl-8">
                    <div className="row shoppingWorth">
                        <h4 className="bookTitle shoppingWorth-header">Wartość zakupów:</h4>
                        <p className="bookPrice cartSection-productData-price"><Price price={props.summary.price} /></p>
                    </div>
                    <div className="row shoppingWorth">
                        <h4 className="bookTitle shoppingWorth-header">Koszty dostawy:</h4>
                        <p className="bookPrice cartSection-productData-price"><Price price={props.summary.postingPrice} /></p>
                    </div>
                </div>
            </div>
            <div className="container cartSection-pay">
                <div className="row shoppingWorth">
                    <h4 className="bookTitle shoppingWorth-header">Do zapłaty:</h4>
                    <p className="bookPrice cartSection-productData-price"><Price price={props.summary.totalPrice} /></p>
                </div>
                <button className="payButton" type="button" onClick={() => props.goToSummary(props.products, props.summary)}>Zapłać</button>
            </div>
        </div>
        
    );

}

export default CartSummary;