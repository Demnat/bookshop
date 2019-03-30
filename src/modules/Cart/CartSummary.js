import React from 'react';
import Price from '../Home/Price';

const CartSummary = ({summary}) => {
    
    return (

        <div className="container">
            <div className="row container cartSection-summary">
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <form className="discount">
                        <h4 className="bookTitle">Kod rabatowy:</h4>
                        <input type="text" className="discountCode" />
                        <button className="discountButton" type="submit">Zastosuj</button>
                    </form>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8 col-xl-8">
                    <div className="row shoppingWorth">
                        <h4 className="bookTitle shoppingWorth-header">Wartość zakupów:</h4>
                        <p className="bookPrice cartSection-productData-price"><Price price={summary.price} /></p>
                    </div>
                    <div className="row shoppingWorth">
                        <h4 className="bookTitle shoppingWorth-header">Koszty dostawy:</h4>
                        <p className="bookPrice cartSection-productData-price"><Price price={summary.postingPrice} /></p>
                    </div>
                </div>
            </div>
            <div className="container cartSection-pay">
                <div className="row shoppingWorth">
                    <h4 className="bookTitle shoppingWorth-header">Do zapłaty:</h4>
                    <p className="bookPrice cartSection-productData-price"><Price price={summary.totalPrice} /></p>
                </div>
                <button className="payButton" type="submit">Zapłać</button>
            </div>
        </div>
        
    );

}

export default CartSummary;